import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] py-16 md:py-20 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <img
              src="/krishidhan_logo.png"
              alt="Krishidhan Seeds"
              className="h-auto w-auto max-w-[200px]"
            />
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading technology driven Indian agri input company providing access to latest technologies for farmers.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Company</h4>
            <ul className="space-y-4 text-lg text-gray-600">
              <li><Link href="/about" className="hover:text-green-700 transition-colors">About Us</Link></li>
              <li><Link href="/group-of-companies" className="hover:text-green-700 transition-colors">Group of Companies</Link></li>
              <li><Link href="/research" className="hover:text-green-700 transition-colors">Research</Link></li>
              <li><Link href="/infrastructure" className="hover:text-green-700 transition-colors">Infrastructure</Link></li>
              <li><Link href="/career" className="hover:text-green-700 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Products</h4>
            <ul className="space-y-4 text-lg text-gray-600">
              <li><Link href="/products/cotton" className="hover:text-green-700 transition-colors">Cotton</Link></li>
              <li><Link href="/products/paddy" className="hover:text-green-700 transition-colors">Paddy</Link></li>
              <li><Link href="/products/soybean" className="hover:text-green-700 transition-colors">Soybean</Link></li>
              <li><Link href="/products/wheat" className="hover:text-green-700 transition-colors">Wheat</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Contact</h4>
            <address className="text-sm text-gray-600 not-italic space-y-2 leading-relaxed">
              <p>Krishidhan Seeds Pvt. Ltd.</p>
              <p>"Krishidhan Bhawan", D3-D6,</p>
              <p>Additional MIDC, Aurangabad Road,</p>
              <p>Jalna - 431 203, Maharashtra, India</p>
              <p>Phone: +91 2482 222600</p>
              <p>Email: info@krishidhanseeds.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-lg text-gray-500">
          <p>© {new Date().getFullYear()} Krishidhan Seeds Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
