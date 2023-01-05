interface IOrderMock {
  isPaymentCompleted?: boolean; // false if not provided
  paymentType?: "CASH" | "CARD" | "QR"; // null if not provided
  isPrepaidToPartner: boolean; //если true то isPaymentCompleted = false
  fromAddress: string; // рандомный адрес ресторана
  fromLongitude: number; // geocode долготы адреса ресторана
  fromLatitude: number; //geocode широты адреса ресторана
  toAddress: string; // рандомный адрес клиента
  toLongitude: number;
  toLatitude: number;
  approximateReadyTime: number; // рандом от 10 до 30
  deliveryDistance: number; // рандом от 500 до 10000
  orderAmount: number; // рандом от 500 до 3000
  organizationServiceOrderId?: string; // рандом от 100000 до 200000
  customerComment?: string; // lorem ipsum
  orderDescription?: string; // 2 × Корндог (380)
  //1 × Корндог чеддер (220)
  //1 × Хрустящие креветки с кисло-сладким соусом (350)
  //1 × Жульен 35см (350)
  //________________
  //Подарки:
  //  - Аригато
  fromAddressTitle?: string; // название ресторана из рандомной строчки
  toAddressTitle?: string; //  имя клиента из рандомной строчки
  toAddressPhone: string; //  телефон клиента из рандомной строчки
}
