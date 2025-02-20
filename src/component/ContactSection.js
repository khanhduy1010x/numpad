export default function ContactSection() {
    return (
        <section className="contact">
        <h2>Liên Hệ</h2>
        <p>Bạn có thắc mắc hoặc muốn đặt hàng? Hãy liên hệ với chúng tôi!</p>
        <form className="contact-form">
          <input type="text" placeholder="Tên của bạn" required />
          <input type="email" placeholder="Email của bạn" required />
          <textarea placeholder="Nội dung tin nhắn" required></textarea>
          <button type="submit">Gửi Tin Nhắn</button>
        </form>
      </section>
    )
}