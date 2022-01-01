/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//showPage function to display students information, nine students per page

const itemsPerPage = 9;

function showPage(list, page) {

   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   
   //remove any students previously displayed
   studentList.innerHTML = '';
   
   //loop to cycle the student information 
   if (list.length > 0) {
      for (let i = 0; i <list.length; i++) {
         if (i >= startIndex && i < endIndex) {
            const studentInfo = `
               <li class="student-item cf">
               <div class="student-details">
                 <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                 <h3>${list[i].name.first} ${list[i].name.last}</h3>
                 <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                 <span class="date">Joined ${list[i].registered.date}</span>
               </div>
             </li>
            `;
            studentList.insertAdjacentHTML('beforeend', studentInfo);
         }
      }
   }
}

//addPagination function to create and append pagination buttons

function addPagination(list) {
   const numOfPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');
   
   //remove any pagination buttons previously displayed
   linkList.innerHTML = '';
      for (let i = 1; i <= numOfPages; i++){
      const pageBtn = `
      <li>
      <button type="button">${i}</button>
      </li>
    `;
   linkList.insertAdjacentHTML('beforeend', pageBtn);
   }

   //click target for pagination button
   document.querySelector('.link-list button').className = 'active';
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
        document.querySelector('.active').className = '';
        e.target.className = 'active';
        showPage(list, e.target.textContent);
      }
   });
}

//functions called

showPage(data, 1);
addPagination(data);