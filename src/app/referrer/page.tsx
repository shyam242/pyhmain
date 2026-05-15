import ReferrerForm from "@/components/ReferrerForm";
import { Toaster } from "react-hot-toast";

export default function ReferrerPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-gray-50 to-gray-100 py-20 px-4">
      <div className="mx-auto max-w-5xl rounded-4xl border border-gray-200 bg-white shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#050B2C] mb-4">
              Become a PickYourHire Referrer
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your background, the companies you refer for, and the referral opportunities you bring. We’ll connect you with the right referral incentives and candidate workflows.
            </p>
          </div>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#ffffff",
                color: "#050b2c",
                border: "1px solid rgba(13, 41, 89, 0.08)",
                backdropFilter: "blur(12px)",
                padding: "14px 18px",
                borderRadius: "12px",
              },
            }}
          />
          <ReferrerForm />
        </div>
      </div>
    </main>
  );
}
