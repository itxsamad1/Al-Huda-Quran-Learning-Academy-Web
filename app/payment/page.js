export default function PaymentPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Payment</h2>
      <div className="border p-6 rounded shadow-sm bg-white">
        <p className="mb-4 text-center">
          Secure payment support for Visa & MasterCard coming soon.
        </p>
        <button className="w-full bg-secondary text-white py-3 rounded hover:opacity-90">
          Pay Now (Demo)
        </button>
      </div>
    </div>
  );
}