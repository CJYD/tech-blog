import { NextResponse } from 'next/server'

// ConvertKit API configuration
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3'
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if API keys are configured
    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit API keys not configured')
      // In development, just return success
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
          { message: 'Development mode: Email subscription simulated', email },
          { status: 200 }
        )
      }
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to ConvertKit
    const response = await fetch(
      `${CONVERTKIT_API_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('ConvertKit API error:', data)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!',
        subscription: data.subscription 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}