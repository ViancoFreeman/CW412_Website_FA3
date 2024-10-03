document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('resourceTitle').value;
    const category = document.getElementById('resourceCategory').value;
    const file = document.getElementById('resourceFile').files[0];

    if (file && file.type === 'application/pdf') {
        // Here you would typically send the file to the server
        // For demo purposes, we're just logging the file information
        console.log('Uploading:', { title, category, file });

        // Clear form fields after submission
        document.getElementById('uploadForm').reset();
    } else {
        alert('Please upload a valid PDF file.');
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resourcesContainer = document.getElementById('resourcesContainer');
    
    // Placeholder for searching resources
    console.log('Searching for:', query);
    // Normally, you would filter and display resources based on the search query
});
// document.getElementById('uploadForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const title = document.getElementById('resourceTitle').value;
//     const category = document.getElementById('resourceCategory').value;
//     const file = document.getElementById('resourceFile').files[0];

//     if (file && file.type === 'application/pdf') {
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('category', category);
//         formData.append('file', file);

//         fetch('uploadResource.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 console.log('Resource uploaded successfully:', data);
//                 document.getElementById('uploadForm').reset();
//                 alert('Resource uploaded successfully!');
//             } else {
//                 console.error('Upload failed:', data.message);
//                 alert('Upload failed: ' + data.message);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred while uploading the resource.');
//         });
//     } else {
//         alert('Please upload a valid PDF file.');
//     }
// });

// document.getElementById('searchButton').addEventListener('click', function() {
//     const query = document.getElementById('searchInput').value.toLowerCase();

//     fetch('searchResources.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query: query })
//     })
//     .then(response => response.json())
//     .then(data => {
//         const resourcesContainer = document.getElementById('resourcesContainer');
//         resourcesContainer.innerHTML = ''; // Clear previous results

//         if (data.resources.length > 0) {
//             data.resources.forEach(resource => {
//                 const resourceElement = document.createElement('div');
//                 resourceElement.className = 'resource-item';
//                 resourceElement.innerHTML = `
//                     <h3>${resource.title}</h3>
//                     <p>Category: ${resource.category}</p>
//                     <a href="${resource.url}" target="_blank">Download</a>
//                 `;
//                 resourcesContainer.appendChild(resourceElement);
//             });
//         } else {
//             resourcesContainer.innerHTML = '<p>No resources found.</p>';
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while searching for resources.');
//     });
// });
