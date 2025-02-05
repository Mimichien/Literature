'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('表單已提交！\n' + JSON.stringify(formData, null, 2));
    setFormData({
      companyName: '',
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">聯絡資訊</h1>
        
        {/* 聯絡表單 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">聯絡表單</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyName">
                  公司名稱
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                聯絡事項
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              提交
            </button>
          </form>
        </div>

        {/* 聯絡資訊 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">聯絡方式</h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span className="font-medium">電子郵件：</span>
              <span>example@email.com</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">電話：</span>
              <span>(02) 1234-5678</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">地址：</span>
              <span>台北市某區某路123號</span>
            </p>
            <div className="pt-4">
              <h3 className="font-medium mb-2">營業時間</h3>
              <p>週一至週五：9:00 - 18:00</p>
              <p>週六、週日：休息</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 