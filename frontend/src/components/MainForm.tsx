

import React, { useState } from 'react';
import UrlResult from './UrlResult';

function MainForm() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const isValidUrl = (string: string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!isValidUrl(longUrl)) {
            setError('Please enter a valid URL.');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/urls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ longUrl }),
            });
            const data = await response.json();
            setShortUrl(data.shortUrl);
        } catch (error) {
            console.error('Error shortening URL:', error);
            setError('Failed to shorten URL. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="form-container">
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url-input">Enter URL to shorten:</label>
                <input
                    id="url-input"
                    type="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="https://example.com"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? (
                        <span className="loading-spinner">Shortening...</span>
                    ) : (
                        'Shorten URL'
                    )}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
            {shortUrl && <UrlResult shortUrl={shortUrl} />}
        </div>
    );
}

export default MainForm;