"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Phone,
  MessageSquare,
  Hash,
  Code,
  Terminal,
  Zap,
  BookOpen,
  ArrowRight,
  Building2,
  Truck,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { CodeTerminal, type CodeSnippet } from "@/components/code-terminal"

interface Service {
  id: string
  icon: typeof Phone
  title: string
  description: string
  features: string[]
  snippets: CodeSnippet[]
  output: string[]
}

const services: Service[] = [
  {
    id: "voice-api",
    icon: Phone,
    title: "Voice API",
    description:
      "Build programmable voice applications with call control, IVR, recording, and real-time transcription across 180+ countries.",
    features: [
      "Programmable call control",
      "Interactive Voice Response (IVR)",
      "Call recording and storage",
      "Real-time transcription",
      "Conference calling",
      "Call analytics and CDRs",
    ],
    snippets: [
      {
        label: "Node.js",
        language: "javascript",
        filename: "outbound-call.js",
        code: `import { Alfacall } from '@alfacall/sdk';

const client = new Alfacall({ apiKey: process.env.ALFACALL_API_KEY });

// Place an outbound call with an IVR menu
const call = await client.calls.create({
  to: '+14155550142',
  from: '+18005550199',
  answerUrl: 'https://your-app.com/ivr',
  record: true,
  machineDetection: 'enable',
});

console.log('Call SID:', call.sid);
console.log('Status:', call.status);`,
      },
      {
        label: "Python",
        language: "python",
        filename: "outbound_call.py",
        code: `from alfacall import Alfacall

client = Alfacall(api_key=os.environ["ALFACALL_API_KEY"])

# Place an outbound call with an IVR menu
call = client.calls.create(
    to="+14155550142",
    from_="+18005550199",
    answer_url="https://your-app.com/ivr",
    record=True,
)

print("Call SID:", call.sid)
print("Status:", call.status)`,
      },
      {
        label: "cURL",
        language: "bash",
        filename: "outbound-call.sh",
        code: `curl -X POST https://api.alfacall.net/v1/calls \\
  -H "Authorization: Bearer $ALFACALL_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+14155550142",
    "from": "+18005550199",
    "answerUrl": "https://your-app.com/ivr",
    "record": true
  }'`,
      },
    ],
    output: [
      "Connecting to api.alfacall.net ...",
      "POST /v1/calls 201 Created (142ms)",
      "Call SID: CA9f1c4b7e2a",
      "Status: queued → ringing → in-progress",
      "Recording started · transcription: live",
    ],
  },
  {
    id: "messaging-api",
    icon: MessageSquare,
    title: "Messaging API",
    description:
      "Send and receive SMS, MMS, and WhatsApp messages globally with delivery tracking, templates, and webhooks.",
    features: [
      "SMS and MMS support",
      "Two-way messaging",
      "Delivery webhooks",
      "Message templates",
      "Shortcode support",
      "Unicode and concatenation",
    ],
    snippets: [
      {
        label: "Node.js",
        language: "javascript",
        filename: "send-sms.js",
        code: `import { Alfacall } from '@alfacall/sdk';

const client = new Alfacall({ apiKey: process.env.ALFACALL_API_KEY });

// Send a transactional SMS with a delivery webhook
const message = await client.messages.create({
  to: '+14155550142',
  from: 'ALFACALL',
  body: 'Your verification code is 480913',
  statusCallback: 'https://your-app.com/sms/status',
});

console.log('Message ID:', message.id);
console.log('Segments:', message.segments);`,
      },
      {
        label: "Python",
        language: "python",
        filename: "send_sms.py",
        code: `from alfacall import Alfacall

client = Alfacall(api_key=os.environ["ALFACALL_API_KEY"])

# Send a transactional SMS with a delivery webhook
message = client.messages.create(
    to="+14155550142",
    from_="ALFACALL",
    body="Your verification code is 480913",
    status_callback="https://your-app.com/sms/status",
)

print("Message ID:", message.id)
print("Segments:", message.segments)`,
      },
      {
        label: "cURL",
        language: "bash",
        filename: "send-sms.sh",
        code: `curl -X POST https://api.alfacall.net/v1/messages \\
  -H "Authorization: Bearer $ALFACALL_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+14155550142",
    "from": "ALFACALL",
    "body": "Your verification code is 480913"
  }'`,
      },
    ],
    output: [
      "Connecting to api.alfacall.net ...",
      "POST /v1/messages 202 Accepted (88ms)",
      "Message ID: SM3b8d2f0a91",
      "Segments: 1 · encoding: GSM-7",
      "Status: queued → sent → delivered",
    ],
  },
  {
    id: "number-management",
    icon: Hash,
    title: "Number Management",
    description:
      "Search, provision, and manage local, mobile, and toll-free numbers programmatically across 100+ countries.",
    features: [
      "Number search and filtering",
      "Instant provisioning",
      "Number configuration",
      "Porting management",
      "Regulatory compliance",
      "Number lifecycle management",
    ],
    snippets: [
      {
        label: "Node.js",
        language: "javascript",
        filename: "buy-number.js",
        code: `import { Alfacall } from '@alfacall/sdk';

const client = new Alfacall({ apiKey: process.env.ALFACALL_API_KEY });

// Search and instantly provision a local number
const [available] = await client.numbers.search({
  country: 'US',
  type: 'local',
  areaCode: '212',
  capabilities: ['voice', 'sms'],
});

const number = await client.numbers.buy({ phoneNumber: available.phoneNumber });

console.log('Provisioned:', number.phoneNumber);
console.log('Monthly:', number.monthlyPrice);`,
      },
      {
        label: "Python",
        language: "python",
        filename: "buy_number.py",
        code: `from alfacall import Alfacall

client = Alfacall(api_key=os.environ["ALFACALL_API_KEY"])

# Search and instantly provision a local number
available = client.numbers.search(
    country="US", type="local", area_code="212",
    capabilities=["voice", "sms"],
)[0]

number = client.numbers.buy(phone_number=available.phone_number)

print("Provisioned:", number.phone_number)
print("Monthly:", number.monthly_price)`,
      },
      {
        label: "cURL",
        language: "bash",
        filename: "search-numbers.sh",
        code: `curl -G https://api.alfacall.net/v1/numbers/available \\
  -H "Authorization: Bearer $ALFACALL_API_KEY" \\
  -d country=US \\
  -d type=local \\
  -d areaCode=212`,
      },
    ],
    output: [
      "Connecting to api.alfacall.net ...",
      "GET /v1/numbers/available 200 OK (61ms)",
      "Found 27 matching numbers",
      "Provisioned: +1 (212) 555-0188",
      "Monthly: $1.00 · capabilities: voice, sms",
    ],
  },
]

const industries = [
  {
    icon: Building2,
    name: "Contact Centers & BPO",
    description: "Scale inbound and outbound campaigns with least-cost routing, IVR, and real-time CDRs.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Order confirmations, delivery alerts, and abandoned-cart SMS with global delivery rates.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "HIPAA-conscious appointment reminders, secure voice, and two-way patient messaging.",
  },
  {
    icon: Landmark,
    name: "Banking & Fintech",
    description: "OTP delivery, fraud alerts, and verified caller ID to build customer trust.",
  },
  {
    icon: Truck,
    name: "Logistics & Mobility",
    description: "Driver-rider masked calling, dispatch notifications, and proof-of-delivery messaging.",
  },
  {
    icon: GraduationCap,
    name: "SaaS & Platforms",
    description: "Embed voice, verification, and notifications into your product with a few API calls.",
  },
]

const sdks = [
  { name: "Node.js", icon: "JS" },
  { name: "Python", icon: "PY" },
  { name: "PHP", icon: "PHP" },
  { name: "Ruby", icon: "RB" },
  { name: "Java", icon: "JV" },
  { name: "C#", icon: "C#" },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Developer Services"
          eyebrowIcon={Code}
          title="APIs for Modern Communications"
          description="Build powerful voice and messaging applications with our developer-friendly APIs and SDKs. Try the live examples below."
        />

        {/* Services with interactive terminals */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 scroll-mt-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0f2744]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#0f2744]" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <Zap className="w-4 h-4 text-[#FFBE32]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" asChild className="mt-8">
                    <Link href="/contact">
                      Get API Access
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <CodeTerminal snippets={service.snippets} output={service.output} />
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Industries */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary mb-6">
                <Building2 className="w-4 h-4 text-[#0f2744]" />
                <span className="text-sm font-medium text-[#0f2744]">Industries We Power</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Built for every communication workflow
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From OTP delivery to global contact centers, teams across industries build on Alfacall.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-[#FFBE32]/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744] flex items-center justify-center mb-4 group-hover:bg-[#FFBE32] transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-white group-hover:text-[#0f2744] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                  <p className="mt-2 text-muted-foreground">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section id="developer" className="py-24 bg-[#0f2744] text-white scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Official SDKs</h2>
              <p className="mt-4 text-lg text-white/70">
                Get started quickly with our official libraries for your favorite language.
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {sdks.map((sdk) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-[#FFBE32]/40 transition-colors"
                >
                  <div className="text-2xl font-mono font-bold text-[#FFBE32] mb-2">{sdk.icon}</div>
                  <div className="text-sm text-white/70">{sdk.name}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Terminal,
                  title: "RESTful APIs",
                  description: "Clean, well-documented REST APIs with predictable resource-oriented URLs.",
                },
                {
                  icon: Zap,
                  title: "Webhooks",
                  description: "Real-time event notifications for call status, message delivery, and more.",
                },
                {
                  icon: BookOpen,
                  title: "Documentation",
                  description: "Comprehensive guides, tutorials, and API references.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#FFBE32]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#FFBE32]" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to start building?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Sign up for a free account and start integrating voice and messaging into your applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get API Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
