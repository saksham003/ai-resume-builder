import { PageHeader } from "@/components/page-header"
import { SettingsForm } from "@/components/settings-form"

export default function SettingsPage() {
  return (
    <div className="container py-6 space-y-8">
      <PageHeader title="Settings" description="Manage your account settings and preferences" />

      <SettingsForm />
    </div>
  )
}
