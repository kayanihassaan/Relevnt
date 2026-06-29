import { OutreachInputs } from "../types";
import { Sparkles, User, Briefcase, FileText } from "lucide-react";

interface EmailFormProps {
  inputs: OutreachInputs;
  setInputs: (inputs: OutreachInputs) => void;
  onSubmit: () => void;
  isGenerating: boolean;
}

export default function EmailForm({
  inputs,
  setInputs,
  onSubmit,
  isGenerating,
}: EmailFormProps) {
  const handleInputChange = (key: keyof OutreachInputs, value: string) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const isFormValid =
    inputs.prospectName.trim() !== "" &&
    inputs.prospectTitle.trim() !== "" &&
    inputs.companyName.trim() !== "" &&
    inputs.companyValueProp.trim() !== "" &&
    inputs.senderName.trim() !== "" &&
    inputs.senderCompany.trim() !== "" &&
    inputs.senderValueProp.trim() !== "" &&
    inputs.rawLinkedInActivity.trim() !== "" &&
    inputs.outreachGoal.trim() !== "";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isFormValid && !isGenerating) onSubmit();
      }}
      className="flex flex-col gap-5"
      id="email-generator-form"
    >
      {/* Section 0: Outreach Goal */}
      <div className="bg-[#0c0a09] border border-[#292524] rounded-xl p-5 shadow-xs flex flex-col gap-4" id="goal-section">
        <div className="flex items-center gap-2 border-b border-[#1c1917] pb-3">
          <div className="p-1.5 bg-[#1c1917] rounded-md text-[#fafaf9]">
            <Sparkles className="w-4 h-4 text-red-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#fafaf9]">Outreach Goal & Style</h3>
            <p className="text-[11px] text-[#a8a29e]">Tell the AI what type of message to write based on this prospect.</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="outreachGoal" className="text-xs font-medium text-[#e7e5e4]">
            Outreach Goal / Message Type
          </label>
          <input
            type="text"
            id="outreachGoal"
            placeholder="e.g., A hyper-personalized B2B cold email under 100 words"
            value={inputs.outreachGoal}
            onChange={(e) => handleInputChange("outreachGoal", e.target.value)}
            className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors font-sans"
            required
          />
          <p className="text-[10px] text-[#a8a29e]">
            Examples: "LinkedIn connection request under 300 chars", "Soft partnership inquiry", "Casual follow-up".
          </p>
        </div>
      </div>

      {/* Section 1: Prospect */}
      <div className="bg-[#0c0a09] border border-[#292524] rounded-xl p-5 shadow-xs flex flex-col gap-4" id="prospect-section">
        <div className="flex items-center gap-2 border-b border-[#1c1917] pb-3">
          <div className="p-1.5 bg-[#1c1917] rounded-md text-[#fafaf9]">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#fafaf9]">Prospect Information</h3>
            <p className="text-[11px] text-[#a8a29e]">Who are you sending this hyper-personalized email to?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="prospectName" className="text-xs font-medium text-[#e7e5e4]">
              Prospect Full Name
            </label>
            <input
              type="text"
              id="prospectName"
              placeholder="e.g., Sarah Vance"
              value={inputs.prospectName}
              onChange={(e) => handleInputChange("prospectName", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="prospectTitle" className="text-xs font-medium text-[#e7e5e4]">
              Prospect Title / Role
            </label>
            <input
              type="text"
              id="prospectTitle"
              placeholder="e.g., VP of Product"
              value={inputs.prospectTitle}
              onChange={(e) => handleInputChange("prospectTitle", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-1">
            <label htmlFor="companyName" className="text-xs font-medium text-[#e7e5e4]">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="e.g., Acme Corp"
              value={inputs.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="companyValueProp" className="text-xs font-medium text-[#e7e5e4]">
              What their company does (Value Proposition)
            </label>
            <input
              type="text"
              id="companyValueProp"
              placeholder="e.g., Offers dynamic cloud optimization tools for engineering fleets"
              value={inputs.companyValueProp}
              onChange={(e) => handleInputChange("companyValueProp", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {/* Section 2: Sender */}
      <div className="bg-[#0c0a09] border border-[#292524] rounded-xl p-5 shadow-xs flex flex-col gap-4" id="sender-section">
        <div className="flex items-center gap-2 border-b border-[#1c1917] pb-3">
          <div className="p-1.5 bg-[#1c1917] rounded-md text-[#fafaf9]">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#fafaf9]">Your Information (The Sender)</h3>
            <p className="text-[11px] text-[#a8a29e]">What specific B2B outcome do you deliver?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="senderName" className="text-xs font-medium text-[#e7e5e4]">
              Your Name
            </label>
            <input
              type="text"
              id="senderName"
              placeholder="e.g., John Doe"
              value={inputs.senderName}
              onChange={(e) => handleInputChange("senderName", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="senderCompany" className="text-xs font-medium text-[#e7e5e4]">
              Your Company Name
            </label>
            <input
              type="text"
              id="senderCompany"
              placeholder="e.g., LatencyX"
              value={inputs.senderCompany}
              onChange={(e) => handleInputChange("senderCompany", e.target.value)}
              className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="senderValueProp" className="text-xs font-medium text-[#e7e5e4]">
            One Clear Outcome Delivered & Value Proof
          </label>
          <textarea
            id="senderValueProp"
            rows={2}
            placeholder="e.g., We help engineering leaders reduce AWS compute bills by 30% through automated instance termination metrics."
            value={inputs.senderValueProp}
            onChange={(e) => handleInputChange("senderValueProp", e.target.value)}
            className="px-3 py-2 text-sm bg-[#1c1917] border border-[#292524] text-[#fafaf9] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors resize-none"
            required
          />
          <p className="text-[10px] text-[#a8a29e]">
            Keep it concrete and data-backed (e.g., "reduce churn by 20%", "increase pipeline volume by 1.5x").
          </p>
        </div>
      </div>

      {/* Section 3: LinkedIn activity */}
      <div className="bg-[#0c0a09] border border-[#292524] rounded-xl p-5 shadow-xs flex flex-col gap-4" id="linkedin-section">
        <div className="flex items-center gap-2 border-b border-[#1c1917] pb-3">
          <div className="p-1.5 bg-[#1c1917] rounded-md text-[#fafaf9]">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#fafaf9]">Prospect Recent LinkedIn Activity (Keywords)</h3>
            <p className="text-[11px] text-[#a8a29e]">Copy & paste a recent post, comment, or article written by the prospect.</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <textarea
            id="rawLinkedInActivity"
            rows={4}
            placeholder="Paste raw LinkedIn posts, updates, or comments here. The AI will extract deep hooks and react to their unique phrase or data point..."
            value={inputs.rawLinkedInActivity}
            onChange={(e) => handleInputChange("rawLinkedInActivity", e.target.value)}
            className="px-3 py-2.5 text-sm bg-[#1c1917] border border-[#292524] rounded-lg focus:outline-none focus:border-[#44403c] focus:bg-black transition-colors font-sans text-[#fafaf9] leading-relaxed"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="generate-email-btn"
        disabled={!isFormValid || isGenerating}
        className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
          isGenerating
            ? "bg-[#292524] text-[#78716c] cursor-not-allowed hover:scale-100 active:scale-100"
            : isFormValid
            ? "bg-[#fafaf9] text-[#1c1917] hover:bg-[#e7e5e4] shadow-md hover:shadow-lg active:scale-[0.99]"
            : "bg-[#1c1917] text-[#78716c] border border-[#292524] cursor-not-allowed hover:scale-100 active:scale-100"
        }`}
      >
        <Sparkles className={`w-4 h-4 ${isGenerating ? "animate-spin text-red-500" : "text-red-500"}`} />
        {isGenerating ? "Analyzing Activity & Writing Email..." : "Generate Personalized Cold Email"}
      </button>
    </form>
  );
}
