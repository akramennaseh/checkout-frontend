import React, { ReactNode } from 'react';
import { toast } from './ui/use-toast';


interface CopyToClipboardProps {
    text: string;
    children: ReactNode;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, children }) => {
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast({description:'Text copied to clipboard'
        });
        } catch (err) {
            console.error('Failed to copy text: ', err);
            toast({description:'Failed to copy text'});
        }
    };

    return (
        <div onClick={() => copyToClipboard(text)} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

export default CopyToClipboard;