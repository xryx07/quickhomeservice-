
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pen, Eraser, Check } from 'lucide-react';

interface ESignatureCanvasProps {
  onSave: (signatureDataUrl: string) => void;
}

const ESignatureCanvas = ({ onSave }: ESignatureCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.beginPath();
    
    // Get position based on event type
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    ctx.moveTo(x, y);
  };
  
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Get position based on event type
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSigned(true);
  };
  
  const endDrawing = () => {
    setIsDrawing(false);
  };
  
  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };
  
  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasSigned) return;
    
    const dataUrl = canvas.toDataURL('image/png');
    onSave(dataUrl);
  };
  
  return (
    <div className="space-y-4">
      <div className="border border-gray-300 dark:border-gray-700 rounded-md p-2">
        <canvas
          ref={canvasRef}
          width={400}
          height={200}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={endDrawing}
          className="w-full h-[150px] bg-white dark:bg-gray-900 touch-none"
        />
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={clearSignature} 
          className="flex items-center gap-1"
        >
          <Eraser size={16} /> Clear
        </Button>
        
        <Button 
          onClick={saveSignature} 
          disabled={!hasSigned}
          className="flex items-center gap-1"
        >
          <Check size={16} /> Save Signature
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground text-center">
        Draw your signature above using your mouse or finger
      </p>
    </div>
  );
};

export default ESignatureCanvas;
