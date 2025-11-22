import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-800">KRISHIDHAN</h3>
            <p className="text-sm text-gray-600">
              Leading technology driven Indian agri input company providing access to latest technologies for farmers.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-green-700">About Us</Link></li>
              <li><Link href="/research" className="hover:text-green-700">Research</Link></li>
              <li><Link href="/infrastructure" className="hover:text-green-700">Infrastructure</Link></li>
              <li><Link href="/careers" className="hover:text-green-700">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/products/cotton" className="hover:text-green-700">Cotton</Link></li>
              <li><Link href="/products/paddy" className="hover:text-green-700">Paddy</Link></li>
              <li><Link href="/products/soybean" className="hover:text-green-700">Soybean</Link></li>
              <li><Link href="/products/wheat" className="hover:text-green-700">Wheat</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <address className="text-sm text-gray-600 not-italic space-y-2">
              <p>Krishidhan Seeds Pvt. Ltd.</p>
              <p>302, Royal House, 11/3 Usha Ganj</p>
              <p>Indore - 452001, MP, India</p>
              <p>Email: info@krishidhanseeds.com</p>
            </address>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Krishidhan Seeds Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
