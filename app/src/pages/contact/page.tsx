import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 92179 99355",
    subDetail: "Mon-Sat, 9AM-7PM",
    href: "tel:+919217999355",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "support@furnirevive.com",
    subDetail: "We reply within 24 hours",
    href: "mailto:support@furnirevive.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    detail: "Your City & Surrounding Areas",
    subDetail: "Doorstep service available",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon-Sat: 9AM-7PM",
    subDetail: "Sunday: By appointment",
    href: undefined,
  },
];

const WHATSAPP_NUMBER = "919217999355";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi FurniRevive! I'd like to inquire about furniture repair services."
);

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Get In Touch
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
                Contact Us
              </h1>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Have a question about our services or need a quote? Reach out
                through any of the channels below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {CONTACT_INFO.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">{item.detail}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.detail}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{item.subDetail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <CardContent className="py-8 space-y-4">
                  <div className="size-14 rounded-full bg-green-500 flex items-center justify-center mx-auto">
                    <MessageCircle className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">Chat on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Get instant replies! Chat with us on WhatsApp for quick quotes,
                    booking assistance, and service inquiries.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-green-600 hover:bg-green-700 text-white mt-2">
                      <MessageCircle className="size-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
