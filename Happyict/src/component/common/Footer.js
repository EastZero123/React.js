const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer">
        <div className="footer_logo">
          <img
            src={`${process.env.PUBLIC_URL}/resources/img/common/logo_footer.png`}
            alt="행복ICT"
          />
        </div>
        <div className="link_rel">
          <ul>
            <li>
              <a href="../etc/privacy.html">개인정보처리방침</a>
            </li>
            <li>
              <a href="../company/contact.html">고객문의</a>
            </li>
          </ul>
          <div className="add">
            <p>서울시 성동구 성수일로6길 33, 2층 (성수동2가, 아연디지털타워)</p>
            <p>The Happy ICT Foundation. All rights reserved.</p>
          </div>
        </div>
        <div className="footer_banner">
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/resources/img/common/logo_social.png`}
                alt="사회적 기업"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/resources/img/common/logo_biz.png`}
                alt="장애인 표준 사업장 with Biz"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
