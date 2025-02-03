'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation.js'
import React from 'react'

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()
  const serverUrl = "http://localhost:3000"

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={serverUrl}
    />
  )
}