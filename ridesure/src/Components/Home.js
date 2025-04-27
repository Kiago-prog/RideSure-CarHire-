import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Function to open the modal
  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchedCars = [
        { id: 1, name: "Toyota Corolla", price: "£50/day", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhzozQvOyl8AvMa1a-1rbuQQuBktf7I4YJQ&s" },
        { id: 2, name: "Honda Civic", price: "£55/day", image: "data:image/jpeg;base64,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" },
        { id: 3, name: "BMW X5", price: "£120/day", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABIEAABAwIDBQQGBQgJBAMAAAABAAIDBBEFEiEGEzFBUSJhcZEUMlKBodEWI0KxwQcVM1NicpLhQ1RVY4KT0vDxJIOj4iVFc//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACQRAAIDAAEEAgIDAAAAAAAAAAABAhESIQMTMVEyQQQUIiOB/9oADAMBAAIRAxEAPwC7l6LmTqFO1hUzI+5fSs+WkUzGmFhCJGDNy8kjTWHqEpsuQZlSLSOSJinb0TxC0aHh0sptDDBGS4TS2yNmnjeOChfQN4giybRcMEEJpaERdQu5BRSUjwNR5KqSJllEsumFllbMNuKbuxZWwUzGuBtuIVt0aY5ioHRSsa0tcDZcMTXjsPuoy1IAg6aHqsls46mcmOpyOJVuOZ49YZh3qVoY8X+9LaKDNzyBTTGQbcUVdTXF22Uj6Ru4Bt2rqaFAYRnonthzcFeNM0cVwsDeAVsUUXwFvembsjkVfIN9AVLHG4jUFTRaBrYz0U7acN1PBXnUpcNbeeqZ6G46a2U1YSK+WNJWfQHdT5JKWaoO+hkHRPFO5v2VdilgmFtAVFM3d3Ja+3I3XPTLlHGwNtqQV0x6WAUQmjtqT5J4fG7g8hORaGGFw4ApoY+2uoUhJ5PSa54Nxc9ycjg40EDsmwKdlA1cpnbuVt8hY/uKjEfRwULRC7wHkoyC7gArYhL+Fk8U7TodCrYqwY+Bj+IsVDJQkagAhG/RieDbp7KO4N2lNjBlpKZw5KF0RC0tTRHk12vcqT8Oe7TX3iy2pmMAQxpZQNEYkwmRoBtofgo3UAaLl3DirpEywa0NUrWgcLK2KO32b+9SspBb1bd91HIUV47mwICvQtY8AOaOi4ykudFZipXAg8lmTNpFeagHEWsVUdQC9nE+S0MUOliE40Ytr96xujeLAEWHRg3dwVk0cYFmMzIluYmE3XHvDW2Asmmxmga2jANyB4JSxws7/eppptOF0PqX9w8lVyR0h2aP2Qkqd3dElqkZthcR21HFWoJXjQ2I71JuR0Xdz00UbsqQ/d00ws6NrXddAo34awasNx43TtyRqLp8bpmcPjqsu/pl4+0VzRkc0hAR0Kub0H9Iz3hdyNcOwRfoSpplyioIL93gU8U55W95UpYWntMd4pzSAbcO4pbLQOxOogwqgmrqx+WGFpe88/ABeT1W2GJV8/p5a6AX+pj3lg1vI6c0b/KjizsQxanwCCT/AKeL62qtz7vwWanhbNVRU7Whjg0lxHLS4Hl96idmqomftXi7r566Rv7rnH7yoJdoMSfxrpfeVUqqEsPZN9NR0KZHQGeESNkaBwsQqGTfn7EBq+pmAJ0NyVz8+4pfSvlA8U11BUCEROn+rBuG8lB+bjfR6tE0EI9pcYbozFpfeLKZ+0uLvbaoq96we00khZ+SF7JSziR0ViOJ1r5jbjZYKbjZDaqWOtp8NxkM3FR2aar42ceDXd3IH/lemCgc3UsaPevCg1tbSvpXHLftRu9kj+a9M/J7jsuN4IIKyZ5r6M7qa51cPsu/BE3ZWlRqvRw0XJaPemb1rDbM4nw0Tt3LoAA5J0dhd2QKox4ONqHX0se6yssncdN2h73ZfVkPuAXHVUnDklDRcexpOYuAVScMaPWuVA6VzuqZ2itJEciKW54AqJ0ebi0BWbFLK3otGSnum9QuK12OrPNcTSFM0Aj7k4Rg8QsTHthXjiyld4xkfirUW2kwI3tLA4fsuIXGztRrDEOQXNyOZ0WZm20JaRBRsa7q+S4HkhNbj9dWdmWdob7LNApZcm8DGE6Pbp3hQPnomybt1XTh/QvAXnRm1vp5pwqWW7Tg0dUcq8lxZq9rMep8EbSx1b6llNUFxfNTxl2g5ZhwvdAqDbPZ6PFKmbC3zyRS0bBFFJmeXzAuvoScvELtDNMSI6eoID+TX2B8RwVTG8QkePRg6OUxi/1QbYXPMgdywmpO0zVVwYKWpqqfFqyqrYXPdNJm3jtA4DoeHFcjr5wyfcwDfT3Dnl9yB3WR3637bc3muMAjdmZTtzdwXQw0Zd9ZUEWyOvzu6x+5PpaqrgBy0+dpN+06+qPzuk3peY/WN+CbvJTwaQqr9kfgASOxCV5fupBfgAdAFIyeuZEGGjeSBbMWuuje8lHIknhYJ8xkhkLBMyUg2JjJIB6X5p/o49GeifURtsKUtPtOB1+CRkqXcIge4X+SPb+Ycb+9IzymwGnglMtgNjqiIhu7DSDe5da3uRzZKpr6DagYk2neykezJM3X6wW5DQ3Bsb93erLsRs0DI51hxVeTEpDfI1o8SSpReBm1+1HpWOOqMJkxGEsGR5bmbdwcbaX9ktXoWw9bXYrs7DUYnHM2oDnMzytLTK0cH27wePUFY/Z3an83YlGKotMMrssluPcbdeC9Hlx3C42RvfWMyvFwVm88tka1xRYEBPRL0fq4ITFtXQyVD4xlygXDr8UHrtqaxkz9y2JrGmwcXXR9eCV2VdCXo1kghjcGvka0nhm0Xckdrh7CO4ryrEq+txR7pJaiQAcuATsDxWppZix8sj2chdcP21Z1/VdHpFVVU1OLmVrj7LSCUBxfHJhC5tHC0E8XPcLj3BAqqonqZQGggHqUSiwmapja0x625BcZ/lyZ1h+NFeTP/nHE/wBezySR76Ky/teSS4d+R27UQYyJ79BY3ViGie9wabeaDnbOC/ZBd+7EmO20I/R00h/wtC9mup7PPUA42m3JJc69uCHSyV8s+Wkpxkv6xVI7ZVTrNjpND7TwuN2nxU/ooI2eBPyS+p7H8Ai5tXEwmdmluICptlmlflYXO14HVV3Y7jlTIGOe1pJ0AuT5XRGmptqaq27FUy44lmQfFcZQb+UjVr6RcwPJFVwzVgnbTiZrZQxpvkvqQFHtnHQVeO11awwNLZQxjoHOYctuyW2sLAZb8735qvT1MmF4lPDjkriYW55XlwcWjKDy46ELf4J+bpI45msmbE71ZMrS3zBK7RSjFJHN8syG0stNhNbBT4LJvqeKgjnL31Ydvwc2Z3aY7W4tbQ92qv4BVQ4hhsFZU0TKds8jWRPd2nOBIBfYBotc6aa2K9HpamljJaHsc3hcsuhG2FBBidI+ajOSqY3OxreDnDUC3uWtMlHltbj1FNHJNT08TC2OpIZNnc/PEWgAlpDe0DfQacNVKKyhkqty11LlNUyHMWvHYdAZA71/aBasnWwPiqZS1wyVDqmVovazXNafO4It3JQuk9NaRY/X097OHExPH3Bb0yUg8MWo46VtTLDEB6JDUOEUjwQXyZC0BznXy3v39yt49PRUFOWsEc9UyjNU67nMjAzta1gaDcnUm5PLgsXK2V2HPaGetQwgajnKLK5tFO2erllifmYaEx3B5tfr8U0xQYkrImTSRgUfZqKiIENJu2MXadXc1Wixa74wWUZzmnuDCdM8Zc7gb6EWQd7hvpTcaTzn4KbCY99W00TmudmkhBDbXNoeAU0xSCeITyChpKqlY2I1UbniM9sCz3N0PeWnQ3UGze8rMTw+Wt3E0D6tkb6eWXIHa6hwsLN1Ot+SLjAJnU1BFKTuaWmDSR/SOc4udb9nM4i/O1+alfAKduRgDQBoAtRUpeWZk1EoYph+F0O0uJDDXufS09U30VwY5weLjgQLWaefOyObZ1tJie0E9RhLy8DK17msOWR+UZi0cbXugNVVPibcEO6gpmzNe5+IVEkYs5g687jh8VjqxSizfSbb4CVDh9Wz6ypkkivw7PHzU+algLt8wk9SEYjZJVyASucJXcNVJPsTM+0jw9zjwA1C+ZdnuRk3yvqJN3RwZnE8kewXBaenaJsTEhJF8rW3RCi2eZRO+tc+5OgjFlpMNwOlcRJUNAb+2+/3KpN+BZUpp6QtAwzDZJSeZjJIR6ipJ5Ys9Y50XVrBZFaWGGKMNpmMA7lLYjU8l2j0V9nJz9Av0Sj/AFtR/GkiednUea6t9uJNs+eKPZbFKkAsw2e3WSzB8Ueo/wAneKSgGV1JTjxdKfIWHxW19Ne5wySZO5xspH4gyAF09b7gVxf5E34NLpIC0f5O6aIA1tXNJYahjRG38T8ValwTZ/D4S9lGJy3jnJf96kbjzJ5crJHuA7lLUV2ZupDQeQAF1F1ZPyzT6aodgmLUIZlpqCOl8WCO/wCKvVc4ms5zInAagO7QQOWWjjZvqyaljj6ykIdLtRR33WGNiLycrZXtsD4NGpUipPwHSMl+UGMx4ri0lmgSwRkZW2HCMcER2RxapwuOF1O+7CwZo3atdp0Qfa9lbU1dTDNnmqpI22aB2j6ptbwVmhY+lDIp2mN7WgFruPBe6PwR5pfI2GIbVT02KyUm4pongNcGB7nDK4XGvgm/SisadY4teFr/ADXmm2tVIzad0sbiDuYfeMgUdPjWLbuMxRCZrnFrS1hcbjktZM2anFYosQqnVW4jje++YWNrkWLh0JCqejRtexziOyYyOyT+jvl5/tFZ6TH8VJN6do6/VFQjF8Ue6wiHhuyrTJwGoa6kw6R0cdO+YNjERa4BoIa4OGtzrcDkqlbV0tYLGlczQgne5jY+4dEElq6mR5e4tBN+SZ6XPe+ZvkqAy59O4u+rf2i8nX2uPNXqOs3PbYL9vMA7k7Llv5CyzrZK98W+jhkfGDYvbGSAel09k2JjVtPJb/8AJyDg2cm1VbI2whgH+E9PFDqraGqeQ07kZrC1rLNSVNfH+ljdGD7TC371VfUSSOGY5xyFtFeSOmabEhO2olhqZGPdHbWP1b2B068Uti3ZdpYmuF2unja4d2YJ2Muy1bmn1nMbfu0UWy8pp9oYJnNOV1UxoPiQuF6uzrSVUe5089PGGmJzoyOnBXZK5/o5EYY91tBfVZ9tXAdXEePNTCSBwBa4juXDCOuijVyVErnNkZkd+zqhsO9hlL3zvcB9k3bZaHem1t7dvsk3HkdFE8sOpZFp00+A0+Cz22vDLomwrHABlexw7811JWYpI6a4eWxcrlUHvY0jKxrT1blPwIH3rmdrgGvEJH9410Z+AcPin9gWSz+cB1b/ABlJV8kP6in/AM8Lilz9FpGIqq+fOfW071TdUTVBygukPRuqMVkmFxO9Uzu9kcB+CoTVMs5yMa2GP2Yz95SMGzTkU/SKmkJs94fb1Y7XVGaqxWqcWxZxc9blauh2de6P0nEN3SUoFzLPoT4Dj7zYKrW7VYbhbTDs5TNkm4Gsmbf+EH8PMrrHpo5SmwMNl61jBW4/VNoYDrnqHl0jv3W8b+XvSdi1HQNMOA0xjfbKa2YAzO/d9kIVWVlVXzmesmfPKbnM83t4DkoW3JAtcngF3r2c7CEWLT4XLTYhHmlla598/azXFiDfrf4o5BthgWKxthxWlmp3tGksdnZT3fa+BWYxunmoqeCOpjLHm7sp5A8ECmMeUZGAEcTfirFWYfBqto8W2fxB7IjHUVLoG5I66ECJz2+y5ruNr6GwPLgAhNFW4bRzh9K/Eozz7TdR7reat7JYPT175KmtG8hj7Ii4ZjbmQVpJsLwKGAiWlpmxt1ceYH73FXSXAqzJmthkNximK+93/smumjI7WI4kR3u/mq+PSUBrA3C42shYLF7b9s9deSG7x/tK8sgTkFC5oGep07m/7/5UW6ofaqfJqpbx3VLeOtxSmOAjHJTxxmNk9c1hNy1rwBfrZcfPTNFzNXn/ALoQ4yOPMrhcTxVVgvumoH+ua9x75Gn8E+Crw6mlZJDRSSPYbtM0ml/ADVDW6HVOeWkDKLKkCs+KtmkdLLvHvfq487qOnrHuqWSRlzN32mWOoNxqhoaruHzGnnbKy2ZhDhcXF1mkWw6MexH+vT2/fKl+kOK2t6dMPGygbJhuImzgKGpdpnAvG4/gq9bh1VRazMvHykb2m+fzUpGrCA2mxYaenye9rfkpG7V4q3UVd/GNvyQELhKmUWzRfS7FSbukiJ6mP5FWItsa9v6SGB/hdv4rJ3Tw4qZQs1/00qf6nH/mFcWSzFJMoumafB8Fr6wb2f8A6Wn/AFswsT4N4nx4d6vy49hOBAtwqE1dYNDUSG4B7uQ93mszimOV+KOImlLYzqI2HT3nmh7WqKIbLuKYvX4vLnr6h8gvcRg2aPd81UF10Cys0VJNWzNip2XcTqbaDxWuEZ8kUEUs8oihaXvcbAN5rZ4HgkWHBtTVASVPIcQzwVjCMLgwuPhnnI7bzy+SvF7SbnU8h0WW7NpAjaDA240InyyujlboHNF7joUAfsOQTlrPONblrwTrZde5g9bpf5KKTQcUzDM2OnjBYzEnsB1Ia0i/xUUmxs7rkVZkPVw0/FbpjcwMn2nHQdLKRoY1movlb8VdsZR5s7YzFfapv4z8k12xeMj1IoX/ALso/FeoNa2SwIAUsLWlpdpa5sncZMI8mGx2PEkCiGn98z5pfQ3H9f8A486f30f+pexQsbd2YaXsVLu2cdNQncYwjxgbG7QH/wCudr/es/1JfQ7H/wCznf5jP9S9mjZZov7inZMshadbjQ/cncY7Z4v9DtoL2/Nsn8bPmmjZHHv7Ok/ib817VGRfKelwfwUckYBJBV7jHbPGvolj39nSfxN+afBsvjTS4Ow+S/77PmvX7Aa2v3JBsRNwbE81NjCPJvo7i3PD5fNnzV2gpceouxFSSPiJ1ikc0tPmdF6TUMZ9pvHgRzQ97LOIF+7qm2XICpNjH4661PHDQVR/o5pm5XHu/l5Jlb+TDaLD7emtpmsP9JG8vb52096Otle06G9uXMLQ4LtjWUVoqhwqafg5svrDwKaJk82bsNWWu6rgB6ZCb/FPZsTL9utZ7oz817G2kwLaFhfhs4pqniYuv+H8QgWK4DXYf2po3Oj/AFkerf5KWxweefQgf13/AMf80lsMj+vxC4ppmqR5G1vNOXAERwrC31ZzSdmAdOLl1bOdDcNw+Wvlys7LB6zzyWwo6aCgh3UAs77TjzKZEI6eIRwtAaBawXWkXLnHQLm2bSJs9zqbg8+q7vAFXD8zrA6n4BIvAsRp0ChS1FLd4byT2ODnuedQDYd6qRkhuX7TuKex32OiAttmyaN48PBdDiRZw4qBh0vxceCex4tcH1eKFLMslycvrG4CdG7JljvwaT5qrfKQeYC42XUk8wgCss4DQ0aEldlmsTboQAhkz7uNugUzpLEH3/78lAEWVDd00n2QT/v/AHwSbMSOPaGiFmXKVIyfTVAXt6LWcbEG6e17HtzEkEKgZLuBafW4jvXN5a7eIIuEBeDgRa/aHFRuJvp71UEuTjqRy6hckmda7dUBcEgyFh16EqtMG8HcvuUBm7YsdeRT3S5gCNHDQnuQDXNykZ9fZcPWHioZDqbtGY8e9T5gB1YeXTwUMha4Wd7iqQja90bg+NzmkG4LTYhavA9uaykAgxJvpdPwLnCzx7+BWPfcHVJruTvPmlij0z6UbN/qR/kJLzXs9R5LiCjC4fCyarYyQXba617QI2tYwANA0ASSW5GUIkpj3HQe9JJZNEsekGYcXcT1TGOLgXnUpJICaLhfmnM9QnmkkoDmchpIPK6lhJt4uskkgHknKVESbjxKSSAkcTmPgFLmJjueQCSSAjc438k9rjr4pJIDocQ14vzBXQ45D7j5pJIDshOhTQ4k27l1JAQuNg79nUJxcSAb6pJIDgcbnu4JpcTcddUkkBDc3LeS4SkkgO3SSSQH/9k=" },
      ];
      setCars(fetchedCars);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">Available Cars</h1>

      {loading ? (
        <div className="text-center text-gray-600 text-xl">Loading cars...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="border p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src={car.image}
                alt={car.name}
                className="h-60 w-full object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-blue-900">{car.name}</h2>
              <p className="text-xl text-gray-700 mt-2">{car.price}</p>

              <div className="flex gap-4 mt-4">
                {/* Book Now Button */}
                <button
                  onClick={() => openModal(car)} // Open the modal with the selected car
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Book Now
                </button>

                {/* View Details Button */}
                <Link
                  to={`/cardetail/${car.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Booking Form */}
      {isModalOpen && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">{`Book ${selectedCar.name}`}</h2>
            
            {/* Booking Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Booking Date</label>
                <input
                  id="date"
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
