import React from 'react';

interface WhatsAppButtonProps {
    buttonText: string;
}

export default function WhatsAppButton({ buttonText }: WhatsAppButtonProps) {
    const handleButtonClick = () => {
        window.open(
            'https://api.whatsapp.com/send?phone=+5545998173697&text=Vamos agendar um horário!',
            '_blank',
            'noopener noreferrer',
        );
    };

    return (
        <a
            className="button"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+5545998173697&text=Vamos agendar um horário!"
            onClick={handleButtonClick}
        >
            <i className="icon-whatsapp"></i>&nbsp; {buttonText}
        </a>
    );
}
