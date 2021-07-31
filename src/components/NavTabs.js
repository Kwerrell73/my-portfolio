import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'Portfolio', 'Contact'];
  return (
    <header class="container">
      <div class="row justify-content-between">
        
          <h2 id="headername"> Werrell</h2>
        
        
          <ul class="bullet">

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



      <div>

      </div>
    </header>
  );
}

export default NavTabs;
