import { HiOutlineClipboardCheck } from "react-icons/hi";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineShoppingBag,
  HiOutlineTruck,
} from "react-icons/hi2";

export const howItWorks = [
  {
    title: "Pilih Produk",
    description:
      "Telusuri berbagai pilihan hasil pertanian kami melalui website Prani atau langsung di halaman Lynk kami di <a href='https://lynk.id/praniid' target='_blank' rel='noreferrer'>lynk.id/praniid</a>. Semua produk dipilih dengan standar kualitas terbaik untuk memenuhi kebutuhan Anda. Untuk cek ketersediaan dan melakukan pre-order produk buah musiman, Anda dapat berkonsultasi langsung dengan <a href='https://wa.me/6281916627483' target='_blank' rel='noreferrer'>contact person</a> kami.",
    icon: HiOutlineShoppingBag,
  },
  {
    title: "Proses Pemesanan & Pembayaran",
    description:
      "Setelah menemukan produk yang diinginkan, lakukan pemesanan dan pembayaran langsung melalui <a href='https://lynk.id/praniid' target='_blank' rel='noreferrer'>lynk.id/praniid</a> dengan mudah dan aman. Saat ini sistem kami belum mendukung pre-order secara otomatis, namun Anda tetap bisa melakukan pemesanan pre-order melalui komunikasi langsung dengan tim kami.",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    title: "Konfirmasi Pesanan",
    description:
      "Setelah melakukan pembayaran, kirimkan bukti/invoice pemesanan Anda ke WhatsApp resmi Prani untuk proses verifikasi dan pencatatan pesanan.",
    icon: HiOutlineClipboardCheck,
  },
  {
    title: "Pengiriman",
    description:
      "Pesanan Anda akan segera dikirimkan setelah semua proses selesai dan produk telah siap. Untuk produk pre-order, pengiriman dilakukan saat musim panen tiba. Kami menggunakan layanan pengiriman terpercaya dengan estimasi waktu yang jelas.",
    icon: HiOutlineTruck,
  },
];
