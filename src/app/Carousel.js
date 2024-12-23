"use client"; // This marks the file as a client-side component

import { useState } from 'react';

export default function Carousel() {
  const [couponText, setCouponText] = useState('AIMNEW15');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="hero_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="box text-center">
              <div className="detail-box" />
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: '25%' }}>
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="coupon-card text-center bg-transparent">
                      <h1 className="text-uppercase text-xl font-bold">15% flat off on your ONE WAY & ROUND Trips</h1>
                      <div className="coupon-row flex justify-center mt-6">
                        <span id="cpnCode" className="border-dashed border-white px-4 py-2">{couponText}</span>
                        <button 
                          id="cpnBtn"
                          className="border border-white px-4 py-2 ml-4 cursor-pointer text-black"
                          onClick={handleCopy}
                        >
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/slider-img.png" alt="slider1" className="w-full" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/dzire.webp" alt="Dzire" className="w-full" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/maruti.png" alt="Maruti" className="w-full" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/slide-bmw.png" alt="bmw" className="w-full" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/mercy.png" alt="mercy" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .coupon-card {
          padding: 50px;
          position: relative;
        }
        .coupon-row {
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
