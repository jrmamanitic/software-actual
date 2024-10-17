import React from 'react';
import { OrderItem } from '../types';

interface ReceiptProps {
  order: OrderItem[];
  total: number;
  username: string;
}

const Receipt: React.FC<ReceiptProps> = ({ order, total, username }) => {
  const receiptRef = React.useRef<HTMLDivElement>(null);

  const printReceipt = () => {
    const printContent = receiptRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent || '';
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div ref={receiptRef}>
        <h2 className="text-2xl font-bold mb-4">Cafeteria Buenisimo</h2>
        <p className="mb-2">Cliente: {username}</p>
        <p className="mb-4">Fecha: {new Date().toLocaleString()}</p>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left">Producto</th>
              <th className="text-right">Cantidad</th>
              <th className="text-right">Precio</th>
              <th className="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.id} className="border-b">
                <td>{item.name}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">${item.price.toFixed(2)}</td>
                <td className="text-right">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold">
          Total: ${total.toFixed(2)}
        </div>
      </div>
      <div>
      <th className="text-right">Metodos de Pago (Yape o Agora) :</th><br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh'}}>
        
      <img src="/src/yape.jpg" alt="Imagen centrada"width="400" height="200" />
      <th className="text-right">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</th>
      <img src="/src/components/qrr.jpg" alt="" width="570" height="400"   />
    </div>
  
      </div>
      <button
        onClick={printReceipt}
        className="mt-4 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
      >
        Imprimir Boleta
      </button>
    </div>
  );
};

export default Receipt;