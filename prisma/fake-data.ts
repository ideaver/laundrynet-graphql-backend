import { Gender, Theme, Language, FileType, Day, EmployeeRole, ItemActivity, AccountCategory, PaymentStatus, PaymentMethod, LaundryItemRequestStatus, TransactionStatus, TransactionCategory, NotificationType, TermOrFaqCategory, TermOrFaqType, OrderType, OrderStatusEnum, MachineStatus, EmployeeAttendanceStatus, Scale, DeliveryStatusType, Period, StockTransactionType, DiscountType, UserRole, VoucherType } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeAccount() {
  return {
    accountNumber: undefined,
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
    accountCategory: faker.helpers.arrayElement([AccountCategory.COMISSION, AccountCategory.CASH, AccountCategory.PLATFORM, AccountCategory.BANK, AccountCategory.DEBT, AccountCategory.POINT] as const),
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.datatype.number(),
    accountNumber: undefined,
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    accountCategory: faker.helpers.arrayElement([AccountCategory.COMISSION, AccountCategory.CASH, AccountCategory.PLATFORM, AccountCategory.BANK, AccountCategory.DEBT, AccountCategory.POINT] as const),
    userId: faker.datatype.uuid(),
  };
}
export function fakeTransaction() {
  return {
    amount: faker.datatype.float(),
    uniqueCode: undefined,
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    transactionCategory: faker.helpers.arrayElement([TransactionCategory.ORDER, TransactionCategory.WITHDRAWAL, TransactionCategory.TOPUP, TransactionCategory.REFERRING, TransactionCategory.REDEEMING, TransactionCategory.REFUND, TransactionCategory.RECONCILE, TransactionCategory.COMISSION] as const),
    paymentId: undefined,
  };
}
export function fakeTransactionComplete() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.float(),
    uniqueCode: undefined,
    createdAt: new Date(),
    proofImageId: undefined,
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    transactionCategory: faker.helpers.arrayElement([TransactionCategory.ORDER, TransactionCategory.WITHDRAWAL, TransactionCategory.TOPUP, TransactionCategory.REFERRING, TransactionCategory.REDEEMING, TransactionCategory.REFUND, TransactionCategory.RECONCILE, TransactionCategory.COMISSION] as const),
    fromAccountId: faker.datatype.number(),
    toAccountId: faker.datatype.number(),
    invoiceId: undefined,
    paymentId: undefined,
  };
}
export function fakeInvoice() {
  return {
    adminFee: faker.datatype.float(),
    amount: faker.datatype.float(),
    uniqueCode: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([PaymentStatus.PENDING, PaymentStatus.UNPAID, PaymentStatus.HALFPAID, PaymentStatus.FULLPAID, PaymentStatus.CANCELLED, PaymentStatus.FAILED, PaymentStatus.REFUNDED] as const),
  };
}
export function fakeInvoiceComplete() {
  return {
    id: faker.datatype.number(),
    adminFee: faker.datatype.float(),
    amount: faker.datatype.float(),
    uniqueCode: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([PaymentStatus.PENDING, PaymentStatus.UNPAID, PaymentStatus.HALFPAID, PaymentStatus.FULLPAID, PaymentStatus.CANCELLED, PaymentStatus.FAILED, PaymentStatus.REFUNDED] as const),
    serviceOrderId: undefined,
    platformOrderId: undefined,
  };
}
export function fakePayment() {
  return {
    amount: faker.datatype.float(),
    updatedAt: faker.datatype.datetime(),
    method: faker.helpers.arrayElement([PaymentMethod.CASH, PaymentMethod.QRIS, PaymentMethod.CREDITCARD, PaymentMethod.DEBITCARD, PaymentMethod.EWALLET, PaymentMethod.PLATFORMWALLET, PaymentMethod.BANKTRANSFER, PaymentMethod.EDC, PaymentMethod.POINT] as const),
    status: faker.helpers.arrayElement([PaymentStatus.PENDING, PaymentStatus.UNPAID, PaymentStatus.HALFPAID, PaymentStatus.FULLPAID, PaymentStatus.CANCELLED, PaymentStatus.FAILED, PaymentStatus.REFUNDED] as const),
  };
}
export function fakePaymentComplete() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.float(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    method: faker.helpers.arrayElement([PaymentMethod.CASH, PaymentMethod.QRIS, PaymentMethod.CREDITCARD, PaymentMethod.DEBITCARD, PaymentMethod.EWALLET, PaymentMethod.PLATFORMWALLET, PaymentMethod.BANKTRANSFER, PaymentMethod.EDC, PaymentMethod.POINT] as const),
    status: faker.helpers.arrayElement([PaymentStatus.PENDING, PaymentStatus.UNPAID, PaymentStatus.HALFPAID, PaymentStatus.FULLPAID, PaymentStatus.CANCELLED, PaymentStatus.FAILED, PaymentStatus.REFUNDED] as const),
    transactionId: faker.datatype.number(),
    edcMachineId: undefined,
  };
}
export function fakeEmployeeActivityComission() {
  return {
    activity: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
    comission: faker.datatype.float(),
    updatedAt: faker.datatype.datetime(),
    period: faker.helpers.arrayElement([Period.HOURLY, Period.DAILY, Period.WEEKLY, Period.MONTHLY, Period.YEARLY] as const),
  };
}
export function fakeEmployeeActivityComissionComplete() {
  return {
    id: faker.datatype.number(),
    activity: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
    comission: faker.datatype.float(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    period: faker.helpers.arrayElement([Period.HOURLY, Period.DAILY, Period.WEEKLY, Period.MONTHLY, Period.YEARLY] as const),
    employeeId: faker.datatype.uuid(),
  };
}
export function fakeCreditCard() {
  return {
    isAccepted: faker.datatype.boolean(),
    lastChecked: undefined,
    cardHolderName: faker.lorem.words(5),
    cardNumber: faker.lorem.words(5),
    expMonth: faker.datatype.number(),
    expYear: faker.datatype.number(),
    cvv: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCreditCardComplete() {
  return {
    id: faker.datatype.number(),
    isAccepted: faker.datatype.boolean(),
    lastChecked: undefined,
    cardHolderName: faker.lorem.words(5),
    customerId: undefined,
    ownerId: undefined,
    cardNumber: faker.lorem.words(5),
    expMonth: faker.datatype.number(),
    expYear: faker.datatype.number(),
    cvv: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeIndonesianBank() {
  return {
    name: faker.name.fullName(),
    code: undefined,
  };
}
export function fakeIndonesianBankComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    code: undefined,
    createdAt: new Date(),
    imageId: faker.datatype.uuid(),
  };
}
export function fakeAddress() {
  return {
    latitude: undefined,
    longitude: undefined,
    label: faker.lorem.words(5),
    street: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeAddressComplete() {
  return {
    id: faker.datatype.number(),
    latitude: undefined,
    longitude: undefined,
    label: faker.lorem.words(5),
    street: faker.lorem.words(5),
    isMain: false,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    userId: undefined,
    subdistrictId: faker.datatype.number(),
  };
}
export function fakeCity() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeCityComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    provinceId: faker.datatype.number(),
  };
}
export function fakeDistrict() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeDistrictComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    cityId: faker.datatype.number(),
  };
}
export function fakeProvince() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeProvinceComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
  };
}
export function fakeSubdistrict() {
  return {
    name: faker.name.fullName(),
    postalCode: faker.lorem.words(5),
  };
}
export function fakeSubdistrictComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    districtId: faker.datatype.number(),
    postalCode: faker.lorem.words(5),
  };
}
export function fakeAttendance() {
  return {
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
    timeIn: faker.datatype.datetime(),
    timeOut: faker.datatype.datetime(),
    reason: undefined,
    latePenalty: undefined,
    absentPenalty: undefined,
    overtimeBonus: undefined,
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([EmployeeAttendanceStatus.PRESENT, EmployeeAttendanceStatus.ABSENT, EmployeeAttendanceStatus.OVERTIME, EmployeeAttendanceStatus.LATE, EmployeeAttendanceStatus.LEAVE, EmployeeAttendanceStatus.HOLIDAY] as const),
  };
}
export function fakeAttendanceComplete() {
  return {
    id: faker.datatype.number(),
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
    timeIn: faker.datatype.datetime(),
    timeOut: faker.datatype.datetime(),
    reason: undefined,
    latePenalty: undefined,
    absentPenalty: undefined,
    overtimeBonus: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    imageUrl: undefined,
    status: faker.helpers.arrayElement([EmployeeAttendanceStatus.PRESENT, EmployeeAttendanceStatus.ABSENT, EmployeeAttendanceStatus.OVERTIME, EmployeeAttendanceStatus.LATE, EmployeeAttendanceStatus.LEAVE, EmployeeAttendanceStatus.HOLIDAY] as const),
    employeeId: faker.datatype.uuid(),
  };
}
export function fakeChatRoom() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
    endedAt: undefined,
  };
}
export function fakeChatRoomComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    endedAt: undefined,
  };
}
export function fakeMessage() {
  return {
    content: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeMessageComplete() {
  return {
    id: faker.datatype.number(),
    content: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    senderId: faker.datatype.uuid(),
    chatRoomId: faker.datatype.number(),
    reviewId: undefined,
  };
}
export function fakeDelivery() {
  return {
    pickupTime: undefined,
    deliveryTime: undefined,
    pickupMessage: undefined,
    deliveryMessage: undefined,
    instructions: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeDeliveryComplete() {
  return {
    id: faker.datatype.number(),
    pickupTime: undefined,
    deliveryTime: undefined,
    pickupMessage: undefined,
    deliveryMessage: undefined,
    instructions: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deliveryStatusId: faker.datatype.number(),
    assignedDriverId: undefined,
  };
}
export function fakeDeliveryLocationHistory() {
  return {
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
  };
}
export function fakeDeliveryLocationHistoryComplete() {
  return {
    id: faker.datatype.number(),
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
    createdAt: new Date(),
    deliveryId: faker.datatype.number(),
  };
}
export function fakeDeliveryStatus() {
  return {
    status: faker.helpers.arrayElement([DeliveryStatusType.PENDING, DeliveryStatusType.ASSIGNED, DeliveryStatusType.PICKEDUP, DeliveryStatusType.DELIVERED, DeliveryStatusType.CANCELLED] as const),
  };
}
export function fakeDeliveryStatusComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: faker.helpers.arrayElement([DeliveryStatusType.PENDING, DeliveryStatusType.ASSIGNED, DeliveryStatusType.PICKEDUP, DeliveryStatusType.DELIVERED, DeliveryStatusType.CANCELLED] as const),
  };
}
export function fakeOutletLaundryItemService() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    durationInMinute: undefined,
    maxWeight: undefined,
    minWeight: undefined,
    cost: undefined,
    salePrice: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    activities: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
    orderTypes: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
  };
}
export function fakeOutletLaundryItemServiceComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: undefined,
    durationInMinute: undefined,
    maxWeight: undefined,
    minWeight: undefined,
    cost: undefined,
    salePrice: faker.datatype.number(),
    isActive: true,
    isOnSale: true,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    outletId: faker.datatype.number(),
    laundryItemId: faker.datatype.number(),
    activities: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
    orderTypes: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
  };
}
export function fakeLaundryItem() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeLaundryItemComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: undefined,
    requiresDryCleaning: false,
    requiresIron: false,
    requiresFold: false,
    requiresPack: false,
    requiresHang: false,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    categoryId: faker.datatype.number(),
    unitOfMeasureId: faker.datatype.number(),
  };
}
export function fakeLaundryItemRequest() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([LaundryItemRequestStatus.PENDING, LaundryItemRequestStatus.APPROVED, LaundryItemRequestStatus.REJECTED] as const),
  };
}
export function fakeLaundryItemRequestComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([LaundryItemRequestStatus.PENDING, LaundryItemRequestStatus.APPROVED, LaundryItemRequestStatus.REJECTED] as const),
    requestById: faker.datatype.uuid(),
    categoryId: faker.datatype.number(),
  };
}
export function fakeMarketSalePriceHistory() {
  return {
    price: faker.datatype.float(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeMarketSalePriceHistoryComplete() {
  return {
    id: faker.datatype.number(),
    price: faker.datatype.float(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    laundryItemId: faker.datatype.number(),
  };
}
export function fakeLaundryItemCategory() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeLaundryItemCategoryComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeUnitOfMeasure() {
  return {
    name: faker.name.fullName(),
    abbreviation: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeUnitOfMeasureComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    abbreviation: undefined,
    conversion: 1,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePlatformItem() {
  return {
    name: faker.name.fullName(),
    cost: undefined,
    salePrice: faker.datatype.float(),
    description: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePlatformItemComplete() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    cost: undefined,
    salePrice: faker.datatype.float(),
    description: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    unitOfMeasureId: faker.datatype.number(),
  };
}
export function fakeStockItem() {
  return {
    quantity: faker.datatype.number(),
  };
}
export function fakeStockItemComplete() {
  return {
    id: faker.datatype.number(),
    quantity: faker.datatype.number(),
    createdAt: new Date(),
    platformItemId: undefined,
  };
}
export function fakeStockTransaction() {
  return {
    quantity: faker.datatype.number(),
    type: faker.helpers.arrayElement([StockTransactionType.Sale, StockTransactionType.Restock] as const),
  };
}
export function fakeStockTransactionComplete() {
  return {
    id: faker.datatype.number(),
    quantity: faker.datatype.number(),
    createdAt: new Date(),
    type: faker.helpers.arrayElement([StockTransactionType.Sale, StockTransactionType.Restock] as const),
    stockItemId: faker.datatype.number(),
  };
}
export function fakeMachine() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    lastOffline: undefined,
    lastOnline: undefined,
    capacity: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    status: faker.helpers.arrayElement([MachineStatus.ACTIVE, MachineStatus.INACTIVE, MachineStatus.MAINTENANCE, MachineStatus.BROKEN, MachineStatus.OTHER] as const),
  };
}
export function fakeMachineComplete() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    description: undefined,
    isOnline: false,
    lastOffline: undefined,
    lastOnline: undefined,
    capacity: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    capacityUnitId: faker.datatype.number(),
    outletId: faker.datatype.number(),
    status: faker.helpers.arrayElement([MachineStatus.ACTIVE, MachineStatus.INACTIVE, MachineStatus.MAINTENANCE, MachineStatus.BROKEN, MachineStatus.OTHER] as const),
    categoryId: undefined,
    settingId: faker.datatype.uuid(),
  };
}
export function fakeMachineCategory() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeMachineCategoryComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeEdcMachine() {
  return {
    name: faker.name.fullName(),
    serialNumber: faker.lorem.words(5),
  };
}
export function fakeEdcMachineComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    isActive: true,
    serialNumber: faker.lorem.words(5),
    settlementAccountId: faker.datatype.number(),
    outletId: faker.datatype.number(),
  };
}
export function fakePrinterMachine() {
  return {
    serialNumber: faker.lorem.words(5),
  };
}
export function fakePrinterMachineComplete() {
  return {
    id: faker.datatype.number(),
    serialNumber: faker.lorem.words(5),
    providerId: faker.datatype.number(),
    outletId: faker.datatype.number(),
    printerSettingsId: faker.datatype.number(),
  };
}
export function fakeNotification() {
  return {
    title: faker.lorem.words(5),
    subTitle: undefined,
    content: faker.lorem.words(5),
    isRead: faker.datatype.boolean(),
    fcmToken: undefined,
    type: faker.helpers.arrayElement([NotificationType.ORDERSTATUS, NotificationType.WASHINGMACHINESTATUS, NotificationType.LAUNDRY, NotificationType.DISCOUNT] as const),
  };
}
export function fakeNotificationComplete() {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.words(5),
    subTitle: undefined,
    content: faker.lorem.words(5),
    createdAt: new Date(),
    isRead: faker.datatype.boolean(),
    fcmToken: undefined,
    type: faker.helpers.arrayElement([NotificationType.ORDERSTATUS, NotificationType.WASHINGMACHINESTATUS, NotificationType.LAUNDRY, NotificationType.DISCOUNT] as const),
    userId: faker.datatype.uuid(),
  };
}
export function fakeOrderStatus() {
  return {
    status: faker.helpers.arrayElement([OrderStatusEnum.PENDING, OrderStatusEnum.PROCESSING, OrderStatusEnum.DONE, OrderStatusEnum.SHIPPED, OrderStatusEnum.DELIVERED, OrderStatusEnum.CANCELLED, OrderStatusEnum.RETURNED] as const),
  };
}
export function fakeOrderStatusComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: faker.helpers.arrayElement([OrderStatusEnum.PENDING, OrderStatusEnum.PROCESSING, OrderStatusEnum.DONE, OrderStatusEnum.SHIPPED, OrderStatusEnum.DELIVERED, OrderStatusEnum.CANCELLED, OrderStatusEnum.RETURNED] as const),
    platformOrderId: undefined,
    ServiceOrderId: undefined,
    changedById: faker.datatype.uuid(),
  };
}
export function fakeServiceOrder() {
  return {
    platformFee: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    orderType: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
  };
}
export function fakeServiceOrderComplete() {
  return {
    id: faker.datatype.number(),
    platformFee: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    raceConditionVersion: 0,
    handleById: undefined,
    orderById: faker.datatype.uuid(),
    voucherId: undefined,
    addressId: undefined,
    deliveryId: undefined,
    orderType: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
    brandId: faker.datatype.number(),
  };
}
export function fakePlatformOrder() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePlatformOrderComplete() {
  return {
    id: faker.datatype.number(),
    addressId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    raceConditionVersion: 0,
    orderById: faker.datatype.uuid(),
  };
}
export function fakeCart() {
  return {
    quantity: faker.datatype.number(),
    price: faker.datatype.float(),
    cost: faker.datatype.float(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCartComplete() {
  return {
    id: faker.datatype.number(),
    quantity: faker.datatype.number(),
    price: faker.datatype.float(),
    cost: faker.datatype.float(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    serviceOrderId: undefined,
    platformOrderId: undefined,
    platformItemId: undefined,
    outletLaundryItemServiceId: undefined,
  };
}
export function fakeComplain() {
  return {
    complain: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeComplainComplete() {
  return {
    id: faker.datatype.number(),
    complain: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    serviceOrderId: undefined,
    platformOrderId: undefined,
  };
}
export function fakeOutlet() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    phone: undefined,
    email: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeOutletComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    isActive: true,
    description: undefined,
    phone: undefined,
    email: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    ownerId: faker.datatype.uuid(),
    addressId: faker.datatype.number(),
    settingId: faker.datatype.number(),
  };
}
export function fakeBusinessHour() {
  return {
    openTime: faker.datatype.datetime(),
    closeTime: faker.datatype.datetime(),
    day: faker.helpers.arrayElement([Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY, Day.SATURDAY, Day.SUNDAY] as const),
  };
}
export function fakeBusinessHourComplete() {
  return {
    id: faker.datatype.number(),
    openTime: faker.datatype.datetime(),
    closeTime: faker.datatype.datetime(),
    day: faker.helpers.arrayElement([Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY, Day.SATURDAY, Day.SUNDAY] as const),
  };
}
export function fakeSchedule() {
  return {
    openTime: faker.lorem.words(5),
    closeTime: faker.lorem.words(5),
    maxOrders: undefined,
    availableSlots: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeScheduleComplete() {
  return {
    id: faker.datatype.number(),
    dayOfWeek: 0,
    openTime: faker.lorem.words(5),
    closeTime: faker.lorem.words(5),
    outletId: faker.datatype.number(),
    maxOrders: undefined,
    availableSlots: undefined,
    isClosed: false,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    createdById: faker.datatype.uuid(),
  };
}
export function fakeReview() {
  return {
    description: faker.lorem.words(5),
    cleanlinessScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    speedScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    qualityScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    priceScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    overallAverageScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeReviewComplete() {
  return {
    id: faker.datatype.number(),
    description: faker.lorem.words(5),
    cleanlinessScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    speedScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    qualityScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    priceScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    overallAverageScore: faker.helpers.arrayElement([Scale.ONE, Scale.TWO, Scale.THREE, Scale.FOUR, Scale.FIVE] as const),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    reviewById: faker.datatype.uuid(),
    outletId: faker.datatype.number(),
  };
}
export function fakeAccessRolePermission() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeAccessRolePermissionComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    employeeUserId: undefined,
  };
}
export function fakeAccountSetting() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeAccountSettingComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    userId: faker.datatype.uuid(),
  };
}
export function fakeOutletSetting() {
  return {
    updatedAt: faker.datatype.datetime(),
    outletId: faker.datatype.number(),
  };
}
export function fakeOutletSettingComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    attendanceRadius: 2,
    printerSettingId: faker.datatype.number(),
    outletId: faker.datatype.number(),
  };
}
export function fakePrinterSetting() {
  return {
    updatedAt: faker.datatype.datetime(),
    printerId: faker.lorem.words(5),
    outletSettingId: undefined,
  };
}
export function fakePrinterSettingComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    printerId: faker.lorem.words(5),
    outletSettingId: undefined,
  };
}
export function fakeMachineSettings() {
  return {
    updatedAt: faker.datatype.datetime(),
    machineId: faker.lorem.words(5),
  };
}
export function fakeMachineSettingsComplete() {
  return {
    id: faker.datatype.uuid(),
    onTurnOnPrice: 0,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    machineId: faker.lorem.words(5),
  };
}
export function fakeVoucherSetting() {
  return {
    discountValue: faker.datatype.number(),
    minOrderTotalAmountValue: undefined,
    maxOrderTotalAmountValue: undefined,
    minOrderQuantityValue: undefined,
    maxOrderQuantityValue: undefined,
    customerQuota: undefined,
    orderQuota: undefined,
    updatedAt: faker.datatype.datetime(),
    restrictToOrderTypes: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
    restrictToPaymentMethods: faker.helpers.arrayElement([PaymentMethod.CASH, PaymentMethod.QRIS, PaymentMethod.CREDITCARD, PaymentMethod.DEBITCARD, PaymentMethod.EWALLET, PaymentMethod.PLATFORMWALLET, PaymentMethod.BANKTRANSFER, PaymentMethod.EDC, PaymentMethod.POINT] as const),
  };
}
export function fakeVoucherSettingComplete() {
  return {
    discountValue: faker.datatype.number(),
    minOrderTotalAmountValue: undefined,
    maxOrderTotalAmountValue: undefined,
    minOrderQuantityValue: undefined,
    maxOrderQuantityValue: undefined,
    customerQuota: undefined,
    orderQuota: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    voucherId: faker.datatype.uuid(),
    createdById: faker.datatype.uuid(),
    restrictToOrderTypes: faker.helpers.arrayElement([OrderType.DROP, OrderType.SELF, OrderType.DELIVERY, OrderType.HOME] as const),
    restrictToPaymentMethods: faker.helpers.arrayElement([PaymentMethod.CASH, PaymentMethod.QRIS, PaymentMethod.CREDITCARD, PaymentMethod.DEBITCARD, PaymentMethod.EWALLET, PaymentMethod.PLATFORMWALLET, PaymentMethod.BANKTRANSFER, PaymentMethod.EDC, PaymentMethod.POINT] as const),
  };
}
export function fakeSession() {
  return {
    token: faker.lorem.words(5),
    expiresAt: faker.datatype.datetime(),
    device: faker.lorem.words(5),
    ipAddress: faker.datatype.float(),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.datatype.number(),
    token: faker.lorem.words(5),
    expiresAt: faker.datatype.datetime(),
    userId: faker.datatype.uuid(),
    device: faker.lorem.words(5),
    ipAddress: faker.datatype.float(),
    createdAt: new Date(),
  };
}
export function fakePhoneCountryCode() {
  return {
    country: faker.lorem.words(5),
  };
}
export function fakePhoneCountryCodeComplete() {
  return {
    phoneCode: faker.datatype.number(),
    country: faker.lorem.words(5),
  };
}
export function fakeImage() {
  return {
    fileType: undefined,
    fileSize: undefined,
  };
}
export function fakeImageComplete() {
  return {
    url: faker.datatype.uuid(),
    fileType: undefined,
    fileSize: undefined,
    createdAt: new Date(),
    platformItemId: undefined,
    laundryItemId: undefined,
  };
}
export function fakeFile() {
  return {
    fileType: undefined,
    fileSize: undefined,
  };
}
export function fakeFileComplete() {
  return {
    url: faker.datatype.uuid(),
    fileType: undefined,
    fileSize: undefined,
    createdAt: new Date(),
    messageId: faker.datatype.number(),
  };
}
export function fakeTermOrFaq() {
  return {
    title: faker.lorem.words(5),
    content: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
    category: faker.helpers.arrayElement([TermOrFaqCategory.FAQ, TermOrFaqCategory.TERM, TermOrFaqCategory.PRIVACY, TermOrFaqCategory.POLICY] as const),
    type: faker.helpers.arrayElement([TermOrFaqType.BRANCH, TermOrFaqType.PLATFORM, TermOrFaqType.VOUCHER] as const),
  };
}
export function fakeTermOrFaqComplete() {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.words(5),
    content: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    category: faker.helpers.arrayElement([TermOrFaqCategory.FAQ, TermOrFaqCategory.TERM, TermOrFaqCategory.PRIVACY, TermOrFaqCategory.POLICY] as const),
    type: faker.helpers.arrayElement([TermOrFaqType.BRANCH, TermOrFaqType.PLATFORM, TermOrFaqType.VOUCHER] as const),
    createdById: faker.datatype.uuid(),
    voucherCode: undefined,
  };
}
export function fakeUser() {
  return {
    fullName: faker.lorem.words(5),
    username: faker.lorem.words(5),
    email: faker.internet.email(),
    emailVerifiedAt: undefined,
    password: faker.lorem.words(5),
    whatsapp: faker.lorem.words(5),
    whatsappVerifiedAt: undefined,
    birthDate: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    role: faker.helpers.arrayElement([UserRole.OWNER, UserRole.EMPLOYEE, UserRole.CUSTOMER, UserRole.ADMIN, UserRole.SUPERUSER] as const),
    gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE] as const),
    customerInfoId: undefined,
    employeeInfoId: undefined,
    ownerInfoId: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.lorem.words(5),
    username: faker.lorem.words(5),
    email: faker.internet.email(),
    emailVerifiedAt: undefined,
    password: faker.lorem.words(5),
    whatsapp: faker.lorem.words(5),
    whatsappVerifiedAt: undefined,
    birthDate: faker.datatype.datetime(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    phoneCountryCodeId: faker.datatype.number(),
    role: faker.helpers.arrayElement([UserRole.OWNER, UserRole.EMPLOYEE, UserRole.CUSTOMER, UserRole.ADMIN, UserRole.SUPERUSER] as const),
    gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE] as const),
    avatarImageId: faker.datatype.uuid(),
    customerInfoId: undefined,
    employeeInfoId: undefined,
    ownerInfoId: undefined,
    language: Language.ID,
    theme: Theme.LIGHT,
    chatRoomId: undefined,
  };
}
export function fakeEmployee() {
  return {
    salary: undefined,
    attendanceBonus: undefined,
    mealAllowance: undefined,
    presenceBonus: undefined,
    transportationAllowance: undefined,
    overtimeBonus: undefined,
    EmployeeRoleAllowance: undefined,
    updatedAt: faker.datatype.datetime(),
    roles: faker.helpers.arrayElement([EmployeeRole.CASHIER, EmployeeRole.COURIER, EmployeeRole.PRODUCTION] as const),
    activities: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
  };
}
export function fakeEmployeeComplete() {
  return {
    salary: undefined,
    attendanceBonus: undefined,
    mealAllowance: undefined,
    presenceBonus: undefined,
    transportationAllowance: undefined,
    overtimeBonus: undefined,
    EmployeeRoleAllowance: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    userId: faker.datatype.uuid(),
    outletId: faker.datatype.number(),
    roles: faker.helpers.arrayElement([EmployeeRole.CASHIER, EmployeeRole.COURIER, EmployeeRole.PRODUCTION] as const),
    activities: faker.helpers.arrayElement([ItemActivity.LABELLING, ItemActivity.SORTING, ItemActivity.CLEANING, ItemActivity.SPOTTING, ItemActivity.DETAILLING, ItemActivity.DRYING, ItemActivity.IRONING, ItemActivity.FOLDING, ItemActivity.PACKING] as const),
  };
}
export function fakeCustomer() {
  return {
    updatedAt: faker.datatype.datetime(),
    referralCode: faker.lorem.words(5),
  };
}
export function fakeCustomerComplete() {
  return {
    userId: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    referralCode: faker.lorem.words(5),
    referredById: undefined,
  };
}
export function fakeOwner() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeOwnerComplete() {
  return {
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    userId: faker.datatype.uuid(),
  };
}
export function fakeVoucher() {
  return {
    name: faker.name.fullName(),
    description: undefined,
    startDate: faker.datatype.datetime(),
    endDate: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    type: faker.helpers.arrayElement([VoucherType.PLATFORM, VoucherType.OUTLET] as const),
    outletVoucherId: undefined,
    platformVoucherId: undefined,
    discountType: faker.helpers.arrayElement([DiscountType.PERCENTAGE, DiscountType.AMOUNT] as const),
  };
}
export function fakeVoucherComplete() {
  return {
    code: faker.datatype.uuid(),
    name: faker.name.fullName(),
    description: undefined,
    startDate: faker.datatype.datetime(),
    endDate: faker.datatype.datetime(),
    isHighlight: false,
    isActive: true,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    type: faker.helpers.arrayElement([VoucherType.PLATFORM, VoucherType.OUTLET] as const),
    outletVoucherId: undefined,
    platformVoucherId: undefined,
    settingsId: faker.datatype.uuid(),
    discountType: faker.helpers.arrayElement([DiscountType.PERCENTAGE, DiscountType.AMOUNT] as const),
    imageId: faker.datatype.uuid(),
  };
}
export function fakeOutletVoucher() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeOutletVoucherComplete() {
  return {
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    voucherId: faker.datatype.uuid(),
    outletId: faker.datatype.number(),
  };
}
export function fakePlatformVoucher() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePlatformVoucherComplete() {
  return {
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    voucherId: faker.datatype.uuid(),
  };
}
