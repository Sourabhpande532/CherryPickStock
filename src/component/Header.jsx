import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <main className=''>
        <header>
          <nav>
            <ul className='nav'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink>Add Item</NavLink>
              </li>
            </ul>
            <ul>
              <fieldset className='theme-toggle'>
                <label>
                  <input type='checkbox' id='theme-toggle' role='switch' />
                  🌙
                </label>
              </fieldset>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
};
