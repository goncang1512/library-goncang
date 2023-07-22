import React from "react";
import Card from "../../fragments/homefragments/CardPembelian";
import { GoLinkExternal } from "react-icons/go";

function LangganaSection() {
  return (
    <>
      <Card className="bg-stone-200">
        <Card.Title>Paket Dasar</Card.Title>
        <Card.Ception>Mulai dengan komponen yang simpel tapi unik</Card.Ception>
        <Card.Price>Rp.0</Card.Price>
        <Card.Ception>Akses terbatas ke beberapa komponen awal</Card.Ception>
      </Card>

      <Card className="bg-yellow-200">
        <Card.Title>Library Plus</Card.Title>
        <Card.Ception>
          Temukan komponen yang lebih unik dan gunakan di website anda lebih
          banyak lagi
        </Card.Ception>
        <Card.Price>Rp.20~</Card.Price>
        <Card.Ception>
          Akses penuh ke semua komponen kamu dapat mengakses kompnen lebih
          fleksibel selama paket aktif
        </Card.Ception>
        <a href="" className="flex items-center gap-2 hover:text-blue-500">
          Lihat selengkapnya
          <GoLinkExternal />
        </a>
      </Card>
    </>
  );
}

export default LangganaSection;
