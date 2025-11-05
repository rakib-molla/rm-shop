import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "rmShop: Best Gadgets, Electronics, Fashion & Accessories Online in italy",
  description: "Discover top gadgets, electronics, fashion, accessories, cars, and collectibles at rmShop. Shop online with fast delivery and best prices in italy."
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default layout