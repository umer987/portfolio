import { getProduct, getShippingRates } from '@/lib/api';
import { ShippingCalculator } from '@/components/ShippingCalculator';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const product = await getProduct(params.slug);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Stock Status:</p>
              <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
            </div>
            <ShippingCalculator productId={product.id} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}