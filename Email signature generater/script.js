// Function to generate the signature
function generateSignature() {
  var name = document.getElementById('name').value;
  var title = document.getElementById('title').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var website = document.getElementById('website').value;
  var company = document.getElementById('company').value;
  var fax = document.getElementById('fax').value;
  var city = document.getElementById('city').value;
  var country = document.getElementById('country').value;
  var social = document.getElementById('social').value;
  var logo = document.getElementById('logo').files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    var logoDataUrl = event.target.result;

    var signatureWrapper = document.createElement('div');
    signatureWrapper.className = 'signature-wrapper';

    var leftColumn = document.createElement('div');
    leftColumn.className = 'left-column';

    var logoImg = document.createElement('img');
    logoImg.src = logoDataUrl;
    logoImg.alt = 'Logo';

    leftColumn.appendChild(logoImg);

    var rightColumn = document.createElement('div');
    rightColumn.className = 'right-column';

    var nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    var titleParagraph = document.createElement('p');
    titleParagraph.className = 'title';
    titleParagraph.textContent = title;

    var emailParagraph = document.createElement('p');
    var emailLink = document.createElement('a');
    emailLink.href = 'mailto:' + email;
    emailLink.textContent = email;
    emailParagraph.innerHTML = '<b>Email:</b> ';
    emailParagraph.appendChild(emailLink);

    var phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = '<b>Phone:</b> ' + phone;

    var websiteParagraph = document.createElement('p');
    var websiteLink = document.createElement('a');
    websiteLink.href = website;
    websiteLink.target = '_blank';
    websiteLink.textContent = website;
    websiteParagraph.innerHTML = '<b>Website:</b> ';
    websiteParagraph.appendChild(websiteLink);

    var companyParagraph = document.createElement('p');
    companyParagraph.innerHTML = '<b>Company:</b> ' + company;

    var addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = '<b>Address:</b> ' + city + ', ' + country;

    var faxParagraph = document.createElement('p');
    if (fax) {
      faxParagraph.innerHTML = '<b>Fax:</b> ' + fax;
    }

    rightColumn.appendChild(nameHeading);
    rightColumn.appendChild(titleParagraph);
    rightColumn.appendChild(emailParagraph);
    rightColumn.appendChild(phoneParagraph);
    rightColumn.appendChild(websiteParagraph);
    rightColumn.appendChild(companyParagraph);
    rightColumn.appendChild(addressParagraph);
    rightColumn.appendChild(faxParagraph);

    signatureWrapper.appendChild(leftColumn);
    signatureWrapper.appendChild(rightColumn);

    var signature = document.getElementById('signature');
    signature.innerHTML = '';
    signature.appendChild(signatureWrapper);

    var socialDiv = document.createElement('div');
    socialDiv.className = 'social';
    var followUsParagraph = document.createElement('p');
    followUsParagraph.innerHTML = '<b>Follow us:</b>';
    socialDiv.appendChild(followUsParagraph);
    var socialLinksHTML = generateSocialLinks(social);
    socialDiv.innerHTML += socialLinksHTML;

    signature.appendChild(socialDiv);

    document.getElementById('signatureContainer').style.display = 'block';
  };

  reader.readAsDataURL(logo);
}

// Function to generate social media links
function generateSocialLinks(social) {
  var links = social.split(',');
  var socialHTML = '';
  for (var i = 0; i < links.length; i++) {
    var trimmedLink = links[i].trim();
    if (trimmedLink) {
      var socialIcon = getSocialIcon(trimmedLink);
      socialHTML += `<p><a href="${trimmedLink}" target="_blank">${socialIcon}</a></p>`;
    }
  }
  return socialHTML;
}

// Function to get the appropriate social media icon based on the URL
function getSocialIcon(url) {
  var socialIcon = '';
  if (url.includes('facebook.com')) {
    socialIcon = '<i class="fab fa-facebook-f"></i> Facebook';
  } else if (url.includes('twitter.com')) {
    socialIcon = '<i class="fab fa-twitter"></i> Twitter';
  } else if (url.includes('linkedin.com')) {
    socialIcon = '<i class="fab fa-linkedin-in"></i> LinkedIn';
  } else if (url.includes('instagram.com')) {
    socialIcon = '<i class="fab fa-instagram"></i> Instagram';
  } else if (url.includes('youtube.com')) {
    socialIcon = '<i class="fab fa-youtube"></i> YouTube';
  } else {
    socialIcon = '<i class="fas fa-globe"></i> Website';
  }
  return socialIcon;
}



// Function to copy the signature text with style to the clipboard
function copySignature() {
  var signature = document.getElementById('signature');
  var signatureText = signature.innerText;
  var range = document.createRange();
  range.selectNodeContents(signature);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  alert('Signature copied to clipboard!');
}

// Function to copy the signature with style to the clipboard
function copyHTMLSignature() {
  var signature = document.getElementById('signature').outerHTML;

  navigator.clipboard.writeText(signature).then(function() {
    alert('HTML Signature copied to clipboard!');
  })
  .catch(function(error) {
    alert('Failed to copy signature!');
  });
}

// Event listener for the "Generate Signature" button
document.getElementById('generateButton').addEventListener('click', generateSignature);

// Event listener for the "Copy Signature" button
document.getElementById('copySignatureButton').addEventListener('click', copySignature);

// Event listener for the "Copy HTML Signature" button
document.getElementById('copyHTMLButton').addEventListener('click', copyHTMLSignature);

// Event listener for the "Save Signature" button
document.getElementById('saveButton').addEventListener('click', function() {
  var savedSignatureContainer = document.createElement('div');
  savedSignatureContainer.className = 'saved-signature';
  savedSignatureContainer.innerHTML = document.getElementById('signature').innerHTML;

  var savedSignaturesContainer = document.getElementById('savedSignaturesContainer');
  if (!savedSignaturesContainer) {
    savedSignaturesContainer = document.createElement('div');
    savedSignaturesContainer.id = 'savedSignaturesContainer';
    savedSignaturesContainer.appendChild(savedSignatureContainer);
    document.body.appendChild(savedSignaturesContainer);
  } else {
    savedSignaturesContainer.appendChild(savedSignatureContainer);
  }
});
