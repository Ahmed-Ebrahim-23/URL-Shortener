import React, { useState } from 'react';

interface UrlResultProps {
    shortUrl: string;
}

const UrlResult: React.FC<UrlResultProps> = ({ shortUrl }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    };

    return (
        <div className="result">
            <p>Shortened URL:</p>
            <div className="url-container">
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                <button className="copy-button" onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default UrlResult;