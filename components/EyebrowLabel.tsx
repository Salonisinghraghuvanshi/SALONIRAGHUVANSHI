interface EyebrowLabelProps {
  text: string;
  className?: string;
}

export function EyebrowLabel({ text, className = "" }: EyebrowLabelProps) {
  return (
    <div className={`eyebrow ${className}`}>
      {text}
    </div>
  );
}
