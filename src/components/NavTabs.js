import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'Portfolio', 'Resume','Contact'];
  return (
    <header className="container">
      <div className="col justify-content-between">
        
          <h2 id="headername"> Werrell</h2>
        
        
          <ul id = "navtabs" className="bullet">

            {tabs.map(tab => (
              <li className="nav-item" key={tab}>
                <a
                  href={'#' + tab.toLowerCase()}
                  // Whenever a tab is clicked on,
                  // the current page is set through the handlePageChange props.
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                  }
                >
                  {tab}
                </a>
              </li>

            ))}
          </ul>
      
      </div>



   
    </header>
  );
}

export default NavTabs;
