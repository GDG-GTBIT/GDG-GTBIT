import { Footer, FooterColumn, FooterBottom, FooterContent } from './ui/footer';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ThemeToggleButton } from './ui/theme-toggle-button';

export default function SiteFooter() {
  return (
    <footer className="w-full border border-t bg-background px-4">
      <div className="mx-auto max-w-6xl">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt={`${siteConfig.name} Logo`} width={50} height={50} />
                <h3 className="text-xl font-bold">{siteConfig.name}</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              {siteConfig.footer.product.map((item) => (
                <Link target="_blank" key={item.href} href={item.href} className="text-sm text-muted-foreground">
                  {item.label}
                </Link>
              ))}
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              {siteConfig.footer.company.map((item) => (
                <Link target="_blank" key={item.href} href={item.href} className="text-sm text-muted-foreground">
                  {item.label}
                </Link>
              ))}
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Social</h3>
              {siteConfig.footer.social.map((item) => (
                <Link target="_blank" key={item.href} href={item.href} className="text-sm text-muted-foreground">
                  {item.label}
                </Link>
              ))}
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved
            </div>
            <div className="flex items-center gap-4">
              <Link target="_blank" href="/privacy">
                Privacy Policy
              </Link>
              <Link target="_blank" href="/terms">
                Terms of Service
              </Link>
              <ThemeToggleButton variant="circle" start="bottom-right" />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
