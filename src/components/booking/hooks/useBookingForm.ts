
import { useState, FormEvent } from 'react';
import { Service } from '@/utils/types';
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { formatINR, validateIndianPhone, validatePinCode } from '@/data/indianLocations';

interface FormData {
  date: Date | undefined;
  timeSlot: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  landmark: string;
  phone: string;
  email: string;
  note: string;
  addressType: 'home' | 'work' | 'other';
  paymentMethod: 'prepaid' | 'onservice';
}

interface ToastProps {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}

interface UseBookingFormReturn {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  isSubmitting: boolean;
  handleGetCurrentLocation: () => void;
  handleSubmit: (e: FormEvent) => void;
}

export const useBookingForm = (
  service: Service,
  onBookingComplete?: () => void,
  toast?: (props: ToastProps) => void
): UseBookingFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    date: undefined,
    timeSlot: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    landmark: '',
    phone: '',
    email: '',
    note: '',
    addressType: 'home',
    paymentMethod: 'prepaid'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          updateFormData('street', '');
          updateFormData('city', 'Mumbai');
          updateFormData('state', 'Maharashtra');
          updateFormData('zipCode', '400001');
          if (toast) {
            toast({
              title: "📍 स्थान पता लगाया",
              description: "आपका वर्तमान स्थान पता लगाया गया है। कृपया पता विवरण सत्यापित करें।",
            });
          }
        },
        () => {
          if (toast) {
            toast({
              title: "स्थान उपलब्ध नहीं",
              description: "कृपया मैन्युअल रूप से पता दर्ज करें।",
              variant: "destructive",
            });
          }
        }
      );
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { date, timeSlot, street, city, state, zipCode, phone, email } = formData;

    if (!date || !timeSlot || !street || !city || !state || !zipCode || !phone || !email) {
      if (toast) {
        toast({
          title: "जानकारी अधूरी है",
          description: "कृपया सभी आवश्यक फ़ील्ड भरें।",
          variant: "destructive"
        });
      }
      return;
    }

    if (!validateIndianPhone(phone)) {
      if (toast) {
        toast({
          title: "अमान्य फ़ोन नंबर",
          description: "कृपया एक मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
          variant: "destructive"
        });
      }
      return;
    }

    if (!validatePinCode(zipCode)) {
      if (toast) {
        toast({
          title: "अमान्य पिन कोड",
          description: "कृपया एक मान्य 6 अंकों का पिन कोड दर्ज करें।",
          variant: "destructive"
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        if (toast) {
          toast({
            title: "लॉगिन आवश्यक",
            description: "बुकिंग करने के लिए कृपया पहले लॉगिन करें।",
            variant: "destructive"
          });
        }
        setIsSubmitting(false);
        return;
      }

      const dateTime = new Date(`${format(date, 'yyyy-MM-dd')} ${timeSlot}`).toISOString();
      const commission = service.price * 0.15; // 15% commission

      const { error } = await supabase.from('bookings').insert({
        service_id: service.id,
        service_name: service.name,
        provider_id: service.providerId || null,
        provider_name: service.providerName,
        customer_id: user.id,
        customer_name: user.user_metadata?.full_name || '',
        customer_phone: phone.startsWith('+91') ? phone : `+91${phone}`,
        customer_email: email,
        status: 'pending',
        date_time: dateTime,
        address_type: formData.addressType,
        address_street: street,
        address_city: city,
        address_state: state,
        address_zip: zipCode,
        address_landmark: formData.landmark || null,
        price: service.price,
        commission: commission,
        payment_method: formData.paymentMethod,
        note: formData.note || null,
      });

      if (error) {
        throw error;
      }

      if (toast) {
        toast({
          title: "🎉 बुकिंग सफल!",
          description: `${service.name} की बुकिंग ${formatINR(service.price)} में हो गई है। आपको जल्द ही ईमेल और SMS मिलेगा।`,
        });
      }

      resetForm();
      if (onBookingComplete) onBookingComplete();
    } catch (error: any) {
      console.error('Booking error:', error);
      if (toast) {
        toast({
          title: "बुकिंग विफल",
          description: error.message || "कुछ गलत हो गया। कृपया पुनः प्रयास करें।",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      date: undefined,
      timeSlot: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      landmark: '',
      phone: '',
      email: '',
      note: '',
      addressType: 'home',
      paymentMethod: 'prepaid'
    });
  };

  return {
    formData,
    updateFormData,
    isSubmitting,
    handleGetCurrentLocation,
    handleSubmit
  };
};
