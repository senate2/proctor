"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function VolunteerFormDialog() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    under18: false,
    comments: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyiF4KrkY5vjp0RdtB8Oa4p_9Xo-j2Uq2RuAlzeHsT7_d9XEXIawVnh5xFokspe2YQi5Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        under18: false,
        comments: "",
      })
      setOpen(false)
      alert("Thank you for signing up to volunteer! We'll be in touch soon.")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg">
          Sign Up to Volunteer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Volunteer Sign Up</DialogTitle>
          <DialogDescription>Join our campaign team and help us make a difference in our community.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              type="text"
              placeholder="Your street address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="under18"
              checked={formData.under18}
              onCheckedChange={(checked) => setFormData({ ...formData, under18: checked as boolean })}
            />
            <Label htmlFor="under18" className="text-sm font-normal cursor-pointer">
              I am under 18 years old
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              placeholder="Tell us about your interests, availability, or any questions you have..."
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
