import React from 'react';

const Nav =() =>(
    <div>
    <header class="main-header">
    <a href="index.html" class="logo">
       
       <span class="logo-mini">
       <img src="assets/dist/img/mini-logo.png" alt=""/>>
       </span>
       <span class="logo-lg">
       <img src="assets/dist/img/logo.png" alt=""/>
       </span>
    </a>
    
    <nav class="navbar navbar-static-top">
       <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          
          <span class="sr-only">Toggle navigation</span>
          <span class="pe-7s-angle-left-circle"></span>
       </a>
      
       <a href="#search"><span class="pe-7s-search"></span></a>
       <div id="search">
          <button type="button" class="close">×</button>
          <form>
             <input type="search" value="" placeholder="type keyword(s) here" />
             <button type="submit" class="btn btn-add">Search...</button>
          </form>
       </div>
       <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
             
            
             <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="pe-7s-mail"></i>
                <span class="label label-success">1</span>
                </a>
                <ul class="dropdown-menu">
                   <li>
                      <ul class="menu">
                      
                         <li>
                            <a href="#" class="border-gray">
                               <div class="pull-left">
                                  <img src="assets/dist/img/avatar5.png" class="img-circle" alt="User Image"/>
                               </div>
                               <h4>Sergio Ramos</h4>
                               <p>Hello i want 9 uefa footballs</p>
                               <span class="badge badge-info badge-massege"><small>5 hours ago</small>
                               </span>
                            </a>
                         </li>
                      </ul>
                   </li>
                </ul>
             </li>
            
             <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="pe-7s-bell"></i>
                <span class="label label-warning">2</span>
                </a>
                <ul class="dropdown-menu">
                   <li>
                      <ul class="menu">
                         <li>
                            <a href="#" class="border-gray">
                            <i class="fa fa-dot-circle-o color-green"></i>Change Your font style</a>
                         </li>
                         <li><a href="#" class="border-gray">
                            <i class="fa fa-dot-circle-o color-red"></i>
                            check the system ststus..</a>
                         </li>
                        
                      </ul>
                   </li>
                </ul>
             </li>
           
             
             <li class="dropdown dropdown-user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="assets/dist/img/avatar5.png" class="img-circle" width="45" height="45" alt="user"/>
                </a>
                <ul class="dropdown-menu" >
                   <li>
                      <a href="profile.html">
                      <i class="fa fa-user"></i> User Profile</a>
                   </li>
                   
                   <li><a href="login.html">
                      <i class="fa fa-sign-out"></i> Signout</a>
                   </li>
                </ul>
             </li>
          </ul>
       </div>
    </nav>
 </header>

 <aside class="main-sidebar">
            
            <div class="sidebar">
               
               <ul class="sidebar-menu">
                  <li class="active">
                     <a href="index.html"><i class="fa fa-tachometer"></i><span>Dashboard</span>
                     <span class="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li class="treeview">
                     <a href="#">
                     <i class="fa fa-users"></i><span>Customers</span>
                     <span class="pull-right-container">
                     <i class="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul class="treeview-menu">
                        <li><a href="add-customer.html">Add Customer</a></li>
                        <li><a href="clist.html">List</a></li>
                        
                     </ul>
                  </li>
                
                  <li class="treeview">
                     <a href="#">
                     <i class="fa fa-shopping-cart"></i><span>Sales</span>
                     <span class="pull-right-container">
                     <i class="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul class="treeview-menu">
                        <li><a href="invoice.html">Invoices</a></li>
                        <li><a href="ninvoices.html">New Invoices</a></li>
                        <li><a href="recurring.html">Recurring invoices</a></li>
                        <li><a href="nrecurring.html">New Recurring invoices</a></li>
                        <li><a href="quote.html">quotes</a></li>
                        <li><a href="nquote.html">New quote</a></li>
                        <li><a href="payment.html">Payments</a></li>
                        <li><a href="taxeport.html">Tax Rates</a></li>
                     </ul>
                  </li>
                 
                 
                  <li class="treeview">
                     <a href="#">
                     <i class="fa fa-file-text"></i><span>Report</span>
                     <span class="pull-right-container">
                     <i class="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul class="treeview-menu">
                        <li><a href="preport.html">Project Report</a></li>
                        <li><a href="creport.html">Client Report</a></li>
                        <li><a href="ereport.html">Expense Report</a></li>
                        <li><a href="incomexp.html">Income expense comparesion</a></li>
                     </ul>
                  </li>
                 
                  <li class="treeview">
                     <a href="#">
                     <i class="fa fa-ticket"></i><span>Tickets</span>
                     <span class="pull-right-container">
                     <i class="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul class="treeview-menu">
                        <li><a href="ticanswer.html">Answered</a></li>
                        <li><a href="ticopen.html">Open</a></li>
                        <li><a href="iprocess.html">Inprocess</a></li>
                        <li><a href="close.html">CLosed</a></li>
                        <li><a href="allticket.html">All Tickets</a></li>
                     </ul>
                  </li>
               
                  <li>
                     <a href="user.html">
                     <i class="fa fa-user-circle"></i><span>User</span>
                     <span class="pull-right-container">
                     </span>
                     </a>
                  </li>
                 
                  <li>
                     <a href="calender.html">
                     <i class="fa fa-calendar"></i> <span>Calender</span>
                     <span class="pull-right-container">
                     </span>
                     </a>
                  </li>
                  
                  <li>
                     <a href="message.html">
                     <i class="fa fa-envelope-o"></i> <span>Message</span>
                     <span class="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="note.html">
                     <i class="fa fa-comment"></i> <span>Notes</span>
                     <span class="pull-right-container">
                     </span>
                     </a>
                  </li>
               </ul>
            </div>
            
         </aside>
 
    </div>
);

export default Nav;