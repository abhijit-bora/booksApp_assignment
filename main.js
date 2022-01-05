var list_data=[]
fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
.then(response =>response.json())
.then(data => {
    list_data=data.clients;
    let els=document.getElementById("list-table-body");
console.log(els);
    list_data.map((item,index)=>{
        console.log(item);
        els.innerHTML += `<tr>
        <td class="company">
           ${item.company}
        </td>
        <td class="budget">
          ${item.id}
        </td>
        <td>
          <span class="badge badge-dot mr-4">
            <span class="status">${item.name}</span>
          </span>
        </td>
        <td>
            ${item.invoicePending}
        </td>
        <td>
          <div class="d-flex align-items-center">
            <span class="completion mr-2">${item.invoicepaid}</span>
          </div>
        </td>
        <td>${item.orderId}</td>
        </tr>` 
    })
    
})
