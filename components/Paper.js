const Paper = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        color: var(--color-black);
        border: 2px solid #fff;
        background-color: #fff;
        max-width: 1020px;
        margin: auto;
        margin-bottom: 8rem;
        padding: 2rem 1rem;
        min-height: 100vh;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 -10px 0 -5px #eee,
          0 -10px 1px -4px rgba(0, 0, 0, 0.15), 0 -20px 0 -10px #eee,
          0 -20px 1px -9px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
          0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
          0 20px 1px -9px rgba(0, 0, 0, 0.15);
      }

      @media screen and (min-width: 640px) {
        div {
          padding: 4rem;
        }
      }
    `}</style>
  </div>
)

export default Paper
