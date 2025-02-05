import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `Aromase envisions a world where scalp care becomes a cornerstone of overall health and vitality. With 100% herbal-based formulations co-developed with dermatologists, Aromase offers effective, drug-resistant-free solutions that promote a balanced and healthy scalp environment. Its products are trusted by over 50 major hospitals and 400 dermatology clinics in Taiwan and have improved the lives of more than 40,000 individuals. Widely available in beauty stores, pharmacies, online platforms, and Costco, Aromase is committed to creating a healthier, more confident future for everyone—one scalp at a time.BREATHE & GROW - AROMASE was established in 2004, with the goal of solving everyone's scalp problems. Held the scalp examination tour around Taiwan to help people have a healthy scalp and solve their scalp problems. AROMASE already helps 50,000+ scalps. Innovation & revolution AROMASE cooperates with dermatologists to continue the revolution and innovative solution of scalp care. We hope to bring nature and simple shampoo into everyone's bathroom for a healthy scalp routine.
AROMASE aims to ensure healthy scalps for not only all human, but also for the Earth. Sustainability has always been an important part of AROMASE. Since 2016, we’ve dedicated in the 3 major actions: Care for group in need & its caregivers; Care for the environment; and Care for the employees. We have strong faith that people can deliver positive power once they are well taken care of.
AROMASE became a Certified B Corporation in 2020. Our main sustainability action includes forest restoration, care of caregivers, PCR recycled circular packaging, and renewable energy. We achieved Cradle to Cradle Bronze Certification in 2020, and committed to Net Zero by 2030. We believe in taking action and making positive impact, “Now or Never!”艾瑪絲（AROMASE）是由創辦人陳俊偉先生於2004年在台灣創立的草本頭皮養護品牌，專注於解決各種頭皮問題。 
品牌以「解決頭皮問題為初心」，強調「洗頭的重點是洗頭皮，不是洗頭髮」，致力於研發草本植萃的頭皮淨化產品。 
在企業社會責任方面，艾瑪絲於2020年獲得國際B型企業認證，成為台灣少數幾家獲此殊榮的企業之一，也是唯一專注於頭皮養護的髮品品牌。 
此外，品牌積極參與公益活動，深入偏鄉育幼院，並與樂山療養院、癌症希望基金會、台灣世界展望會等單位合作，關懷弱勢族群及其照顧者。 
艾瑪絲的明星產品「5α捷利爾頭皮淨化液」於2015年推出，與皮膚科醫師共同研發，採用甘草次酸複合物的液態劑型，溫和不含藥性，旨在解決頭皮困擾。 
品牌也積極推廣頭皮健康教育，早在2013年於品牌總部設立健髮中心，2017年更與三峽恩主公醫院合作成立健髮中心，協助患者進行頭皮檢測，並巡迴各地舉辦超過三萬人次的公益健髮檢測活動。 
艾瑪絲秉持「氧髮淨化，源自根本」的理念，持續專注於頭皮養護，並積極實踐企業社會責任，致力於為消費者提供專業且友善環境的產品與服務。 

          ` 
        },
        { 
          role: "user", 
          content: message 
        }
      ],
      model: "gpt-4o-mini",
    });

    return NextResponse.json({
      message: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('OpenAI API 錯誤：', error);
    return NextResponse.json(
      { error: "處理請求時發生錯誤" },
      { status: 500 }
    );
  }
}
