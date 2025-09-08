'use client'
import { useState } from 'react'

interface CallbackCardProps {
  serviceSlug: string
  suburbSlug: string
  emergency?: boolean
}

export default function CallbackCard({ serviceSlug, suburbSlug, emergency = false }: CallbackCardProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          serviceSlug,
          suburbSlug,
          emergency,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.')
      console.error('Error submitting callback request:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
        <h3 className="font-medium text-green-800">Thank you!</h3>
        <p className="text-green-700 mt-1">
          We've received your callback request and will get back to you{' '}
          {emergency ? 'as soon as possible' : 'during our next office hours'}.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
      <h3 className="font-medium">
        {emergency
          ? 'Request an urgent callback'
          : 'Request a callback during office hours'}
      </h3>
      <p className="text-sm text-blue-700 mt-1 mb-3">
        {emergency
          ? 'For dental emergencies, our team will call you back as soon as possible.'
          : 'Leave your details and we\'ll call you back during our next office hours (Mon-Fri, 9am-5pm).'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border rounded text-sm"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full p-2 border rounded text-sm"
            required
          />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-sm font-medium rounded ${
            emergency
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          data-pt-event={`callback_request_${emergency ? 'emergency' : 'standard'}`}
        >
          {loading ? 'Submitting...' : emergency ? 'Request urgent callback' : 'Request callback'}
        </button>
      </form>
    </div>
  )
}
