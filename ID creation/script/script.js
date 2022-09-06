function createID(){
var member1 =prompt("inter national id", " ");
var member2= prompt("inter phone number", " ");
finalid=(member1.slice(-3)*2+member2.slice(-4));
id=`				<p><span id="display-ID">${finalid}</span></p>
<a href="#" onclick="CopyToClipboard('display-ID');return false;">Copy ID To Clipboard</a>
<form>
				<button type="cancel" value="Cancel">Cancel</>
			</form>`;
document.write(id);
}



toastr.options = {
				"positionClass": "toast-top-center"
			}

			var buttonSelector = '.copy-button';
				
			function showMessage(message) {
				toastr.success(message)
			}
			
			$(buttonSelector).click(selectAndCopy)

			function selectAndCopy() {
				var span = document.getElementById('display-ID')
				var range = document.createRange();
				range.setStartBefore(span.firstChild);
				range.setEndAfter(span.lastChild);
				var sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				document.execCommand("copy");
				showMessage("Copied.");
			}




function play() {

let SwichAudio= new Audio("audio/audio.mp3");
        SwichAudio.play();
      }



(function() {
	 function IDGenerator() {
	 
		 this.length = 8;
		 this.timestamp = +new Date;
		 
		 var _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }
		 
		 this.generate = function() {
			 var ts = this.timestamp.toString();
			 var parts = ts.split( "" ).reverse();
			 var id = "";
			 
			 for( var i = 0; i < this.length; ++i ) {
				var index = _getRandomInt( 0, parts.length - 1 );
				id += parts[index];	 
			 }
			 
			 return id;
		 }

		 
	 }
	 
	 
	 document.addEventListener( "DOMContentLoaded", function() {
		var btn = document.querySelector( "#generate" ),
			output = document.querySelector( "#output" );
			
		btn.addEventListener( "click", function() {
			var generator = new IDGenerator();
			output.innerHTML = generator.generate();
			
		}, false); 
		 
	 });
	 
	 
 })();

function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}




function playaudio() {

let SwichAudio= new Audio("audio/randum.mp3");
        SwichAudio.play();
      }


