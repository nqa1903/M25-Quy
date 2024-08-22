import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div>
      <Button variant={"primary"}>Click me</Button>
      <ModeToggle></ModeToggle>
    </div>
  )
}
