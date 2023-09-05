import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Slider />
			<Footer />
		</div>
	);
}

const Navbar = () => {
	return (
		<nav>
			<a href="#"> Home </a>
			<a href="#"> About </a>
			<a href="#"> Contact </a>
		</nav>
	);
}

const Slider = () => {
	const photos = [
		'https://gagaru.club/uploads/posts/2023-05/1683021542_gagaru-club-p-milie-kotiki-instagram-21.jpg',
		'https://gagaru.club/uploads/posts/2023-05/1683021565_gagaru-club-p-milie-kotiki-instagram-25.jpg',
		'https://gagaru.club/uploads/posts/2023-05/1683021513_gagaru-club-p-milie-kotiki-instagram-27.jpg',
		'https://gagaru.club/uploads/posts/2023-05/1683021532_gagaru-club-p-milie-kotiki-instagram-38.jpg'
	]

	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    if (currentPhotoIndex === photos.length - 1) {
      setCurrentPhotoIndex(0);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  }

  const previousPhoto = () => {
    if (currentPhotoIndex === 0) {
      setCurrentPhotoIndex(photos.length - 1);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  }

  return (
    <section className="slider">
      <h1>Beautiful Landscapes</h1>
      <Carousel photos={photos} currentPhotoIndex={currentPhotoIndex} />
      <button onClick={previousPhoto}>Previous</button>
      <button onClick={nextPhoto}>Next</button>
    </section>
  );
}

const Carousel = ({ photos, currentPhotoIndex }) => {
  return (
    <div className="carousel">
      {photos.map((photo, index) => (
        <div key={index} style={{ display: index === currentPhotoIndex ? 'block' : 'none' }}>
          <img src={photo} alt="" />
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired
};

const Footer = () => {
	return (
		<footer>
			<div className="footer-links">
				<a href="https://www.instagram.com/"><img src="data:image/png;base64,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" alt="" /></a>
				<a href="https://ru-ru.facebook.com/"> <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBw4REBEQDhMQDhARERMRERERERAQEBIRGBIYGBYSFhYaHysiHB0pHxYaI0EkKiwuNzMzGiE3PDcwOy4wMS4BCwsLDw4PHRERHDEoHygwMDIwMDAyMDAwMDAyLjEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAEgQAAICAAIEBwsJBwMFAQAAAAABAgMEEQUGByESMUFRYXGBEyI1QlJykaGxssIVIzI0YnOTwdEkQ1NUY4KzFDPhJYOSotIX/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAUGAgMEAf/EADQRAAIBAgIHBQcFAQEAAAAAAAABAgMEERIFITFBUXGxEzORofAyNGGBwdHhFSJCUvFyFP/aAAwDAQACEQMRAD8A1xABeSqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAkEZm0wWreOuyddFmT8aa7nH0yyMJ1IwWMmkZRi5PCKx5GsBa8Ps8xsvpypq6OFKb9Sy9Zl17M7PGxMU+ipy+NHK9I2q1Z15v6G9Wdd/w6fcpILvPZnPkxMX105fGzFv2c4tfQspn0Nzg/YwtI2z1Z+v2Ds66/j0+5UgbfG6q6Qq3ypsaXLDKxdfe5s1LWTaeaa3NPc0+Zo6YVITWMGnyNE4ShqksOeogEkGwxAAAAAAAAAAAAAAAAAAAAAAAAAJNvq5qzfjJd783SnlOyS3dUV4zNdSrGnHNN4IyhCU3litZqqKJ2SUK4ynOW5RinKT6ki4aG2eWTyljJ9yXH3OvKVnbLiXZmXDQmgsPhIcGmK4T+lY99k+t/lxGzSIC50rOeqlqXHe/t1Jejo+MddTW+G78mu0XoDCYfLuNUIyyy4bXCsf9z3myyJBFSlKTxk8WSKiorBLURkMiQeHpGQyJABDMHSOiMNiFlfVXZzNx75dUlvRngRbi8VqZ40msGUHTWzvjlgrP+3b+U1+a7SmY3B20Tdd0JVzXiyWXanxNdKO4ZGFpTRVGJhwL4RnHkz3Si+eMuNMlbfStSGqr+5ef5+ZH1tHwlrp6n5HFiCw60aoW4RuyvO2jy/Gr6Jrm6fYV0n6VaFWOaDxRETpyhLLJYMkAG0wAAAAAAAAAAAAAAAAJNvqpoGWMu4O9UwylbNc3JBdL9mbNVSpGnFzlsRlCDnJRjtMrU7VWeLkrbU44eL3vidjXix6Od/nxdPwuHhXBQrjGEIrKMYrJJDC4eFcI11pQhFKMYpZJJch7lUu7udxPF7Ny4fksNvbxoxwW3eyCQDmOgAAAAAAAx8Zi6qo8O6cKorxpyUV6WaPFa9aOg8lZKx/065tel5I2QpVKnsRb5I1zqwh7TSLICp//oeB5rv/AAj/APR616/6OfHKyHnVTfu5m12dwv4PwMP/AFUf7os4NRo/WTA3SUKboTnLPgwylGTyWe5SS5Ebc0ShKLwksH8TbGUZa4vE+JwTTTSaayae9NczOc67an9xzxGFj8zx2Vrjq+1H7Ps6uLpJ8Timsms01k0+Jo229zO3nmj81x9eRrr0I1o5ZePA4WQWTXjVz/S2K2lPuFknlzVz4+B1Pk7UVstlGtGrBTjsZXalOVOTjLaAAbjAAAAAAAAAAAEAHph6ZWTjCCcpTkoxiuWTeSR2DVzQ8MJh4Ux3yyzsl5dj431cnUkU7Zlonh2TxU13tfzdfTNrvpdiaX9zOiorulbnNPslsW3n+PuTOj6GEe0e17ORIAIgkgAAAAACGVnW/WuOEXc6kp4iSzSe+Fa8qeXqRt9PaSjhsPZe9/Aj3q8qb3Rj2to43icRO2crJvhSlJylJ8rZJaOs1Xk5z9leb+3E4b25dJZY7X5H3jsfdfN2XzlZN8snkl0JcSXUeJALLGKisEiDbbeLAAMjw3uoPhCjrn/ikdbOR6h+EKOuf+KR1wrWl+/X/K6sm9G90+YABFkgYek8FXfVOmxZwnHJ865mulPecc0rgLMPbZTZ9KuWWfJJcakutbztzKXtN0TwqoYqC76tquzprk9z7JZL+5knou57Or2b2S67vt4HBf0M9POtq6HPAAWYgwAAAAAAAAAQyTZ6q4PuuMw9b3rhqcvNh3790wqTUIuT3IyjFyait51LVvRyw+FqpyXCjBOfTY98n6WbMhElKlJybk9rLRFKKSW4AA8PQAAAAACkbVMW1VRSvHnKcuqCSXrl6jnpc9qsv2jDrmqk/TP/AIKcWrRscLaPxx6lfvpY1363Iggk2uqeBjdjaKprOHCc5J8TUIuWT63FLtOypNU4Ob2JYnNCLlJRW82OgtR8TiIRsslHD1vfHhJyskufg8i632G7js1p5b7eyEEXWKPorE9JXEpYp4fBE7CxoxWtYsqmhdR6sNfC+N1k3DPKMowSecXHk6y1kEnJVqzqyzTeLOinShTWEFggADWbAY2Pwsbqp1TWcbIyg+prIySGNmwM4ZiaJVznVP6Vc5Rl1xk0/YeZYdoeD7lj5tbo2wjauvLgy9cc+0rxdKFTtaUZ8UVirDJNx4MAA2msAAAAAAFr2YUcLFzn/Dqll1ylFezMqhdtk8fnMU+aNS9PCz9iOLSLwtp8urSOmzWNePP6M6CiSESVMsQAAAAIzAJBAAwOcbVfrNH3PxyKgW/ar9Zp+5+ORTy26P8Adoet5Xbzv5c/ogWLZz4Qh5lnuFdLFs58IV+ZZ7jM7z3efJ9DG276PNHVgQCnFkwJBBJ6AAAAQySGAUHavRvw1vRZW/8A1a/P0lGOjbVY/s1Mv6+Xprk/hOclp0W8baPz6kBfLCu/kAASBxgAAAAAAu+yaXf4pc8an6HP9SkFt2W3ZYu2Hl0trrjNfqcOkVjbT5fVHTZvCvH1uZ0pEkIkqhYgAAAaDXyco4C2UZSi068nFuL/ANyPKjfle2geD7uuv/JE3W3fQ5rqabjupcn0OY/KOI/i2/iS/Uj5QxH8W38Sz9THBcOzjwK5mlxPu66c3nOU5tbk5ylJpc28+ADJJLUjEH1VZKL4UJShLni3F+lHyA1iDJ+UcR/Fu/Es/Un5RxH8W78Sz9TFBjkjwMs8uJd9mM7bLr52WTmoVxjlKcpLOUs88m/sHQSmbK8Plh7rPLsUc+iMV+cmXMqukJJ3M8N2C8EifslhQjjzAAOM6gQyQAU7aq/2Wlcv+oT9FVi/M5wXzaxfuw1fO7J+hRS9rKGWjRawtl8+pAXzxrv5AAEicYAAAAAANvqdi+446iT3Lh9zl1SXB9rRqApNNOLyaeafKmuJmurBTg4vesDKEsslJbtfgd3RJg6ExyxGHquX7yCbXNLikvTmZxS2nFtPai0JprFAAHh6CvbQH/0+3rr/AMkSwnhiMPCyLhZGNkHxxklKL5VuZnSn2dSM+DT8GYVI54OPFHDc0M0dp+RcF/L0fhQ/QfImC/l6PwofoTn6zT/oyK/TJf2XgcWJLXtJwdVV9MaoQrTqzahFRTfDlv3FUJShVVWmqiWGJwVabpzcHuBBJvdQ8PXZjoQsjGyLhZnGaUo/R5me1qipQc2scFieU4Z5KPE0OaGaO0/ImD/l6PwofoT8iYP+Xo/Ch+hFfrNP+jJD9Mn/AGXgzW7P6OBo+nnm5zfbN5epIsJ400whFQglGMVkoxSSS5kj2IOpPtJynxbZK045IqPBAAGBmCGSeWIujXCU5vKMIuUnzJLNgHMdpOM7pjnBb1TXGH9z79+8itHvpHFSuutulx2TlPqzeaXYsl2HgXO3p9nSjDgisVZ55uXF+vIAA3GsAAAAAAEkA8Be9l+lf9zCTf8AVq9k4+x9rL4jh+AxllFsLq3lOuSlHmfOn0Nbu07HofSEMRTXdX9Gcc8uWL5YvpT3Fb0rb5KnaLZLr+dviTej6+aHZvauhnAAiyQAAAAAAOb7VfrNH3PxyKgW/ar9Zo+5+ORUC26P92hy+rK7ed/L1uILFs58IV+ZP3GV0sWzjwhX5k/cZlee7z5PoYW3fR5rqdVJIJKgWUAAAAAAhlS2k6W7lh1RF9/e++6Kl9L0vJeks+KxEK4SssajCEXKTfEkuNnHdYNKzxV87pZpN8GuL8WtfRj+fW2SGjbftauZ7I6/nu+7OG/rZKeVbX03mCQAWgggAD0AAAAAAAAAElh1I1jeEs7na/mLX339OXJZ1cj/AOCug01qMasHCexmdOpKnJSjtO6wmmk0001mmuJrnPs5xqRrd3LLD4mXzXFVY/3f2ZfZ9nVxdEjLNZrfnzFTubedvPLL5Pj68ixUK8a0c0fn8D7ABoNwAABzfar9Zo+5+ORUC37VfrNH3PxyKgW2w92hy+rK7ed/L1uILFs48IV+ZP3GV0sWznwhX5k/cZlee7z5PoYW3fR5rqdVJIJKgWUAAAEAo2u+t6SlhsJLv98bbYv6PPCD8rnfJ18W2hQnXnkh/nxZqrVo0o5pf6YG0HWXusv9LRLOuL+dkuKc14qfMvb1FPGQLbb0I0aahH/fiV2tVlVm5SJABvNYAAAAAAAAAAAAAABBZtVdcLMLwarc7cPnuX7ytfZ510egrRJprUIVo5ZrFGdOrOnLNF6ztmAx9V9asplGcHxNP1Ncj6DKTOJaL0ndh590onKuXKlvjJc0o8TLzoXaHTPKOLi6ZeXBOVT61xx9fWV650ZVp64fuXn4EzRv6c9U9T8i6g8MLi67YqdU42xfjQkpL1HtmRvwO5PE5xtV+s0fc/HIqBb9qv1mj7n45FQLbo/3aHL6sr1538vW4gsWzjwhX5k/cZXSxbOvCFfmT9xmV53E+T6GFt30ea6nVgQed18IRcrJRhFccpNRS7WVAsp6ZnjiMRCuLnZKMIRWcpSaSS6ysaZ1/wANVnHDp4iflLvak/Oe99i7Si6Z05icVLhXzbSeca497XHqj+b3khb6NrVXjL9q+O3w+pxVr6nDVHW/LxLBrXrvK3hU4POFb3St3qc1zR8ldPH1FQBBYqFvToxywX55kLVqzqyzSesAA3msAAAAAAAAAAAAAAAAAAAAAAA8B64XE2VS4VM51S8qEpQfblxm/wADr5pCvdOULl/Ugs/THL1lbBqqW9Kr7cUzZCrOHsto22s2npY2yFk641uEOBlGTknvbz3pZcZqQDOnTjTiox2IxnNzlmltBsNX9LPCXxuUFY4xlHguXBXfLLPPJmvAnBTi4y2MRk4vMtpZ8btAx1mar7nQvsQ4UvTLNeo0GNx9974V9k7X9uTkl1LiXYY4NdO3pUvYikZTrVJ+1Jv1w2EnySDcawAD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" alt="" /> </a>
				<a href="https://twitter.com/?lang=ru"> <img src="data:image/png;base64,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" alt="" /> </a>
			</div>
		</footer>
	);
}

export default App;