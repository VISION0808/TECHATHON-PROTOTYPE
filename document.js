document.addEventListener('DOMContentLoaded', function () {
    const captureButton = document.getElementById('capture');
    const videoElement = document.getElementById('camera');
    const previewImage = document.getElementById('preview');
    const submitButton = document.getElementById('submit');

    // Start the camera feed
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                videoElement.srcObject = stream;
            })
            .catch(function (err) {
                console.error("Error accessing camera: ", err);
            });
    }

    // Capture an image from the camera feed
    function captureImage() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const video = videoElement;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        previewImage.src = dataUrl;
        previewImage.style.display = 'block';
    }

    // Handle camera button click
    captureButton.addEventListener('click', captureImage);

    // Start camera on page load
    startCamera();

    // Handle form submission
    submitButton.addEventListener('click', function () {
        alert("Document submitted successfully!");
        // You can add more code here for backend submission
    });
});
const uploadFileInput = document.getElementById('upload-file');
        const cameraElement = document.getElementById('camera');
        const captureButton = document.getElementById('capture');
        const previewImage = document.getElementById('preview');
        const submitButton = document.getElementById('submit');

        let currentFile = null;
        let currentImageUrl = null;

        // Event listener for file upload
        uploadFileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                // Check if the file is an image or PDF (you can add more validation here)
                if (file.type.startsWith('image')) {
                    currentFile = file;
                    currentImageUrl = URL.createObjectURL(file);
                    previewImage.src = currentImageUrl;
                    previewImage.style.display = 'block';
                } else {
                    alert('Please upload an image file');
                }
            }
        });

        // Set up the camera to capture an image
        let videoStream;

        // Function to start camera stream
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                cameraElement.srcObject = stream;
                videoStream = stream;
            } catch (err) {
                alert('Error accessing the camera: ' + err.message);
            }
        }

        // Call startCamera function on load
        window.onload = startCamera;

        // Event listener for camera capture
        captureButton.addEventListener('click', function () {
            if (videoStream) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = cameraElement.videoWidth;
                canvas.height = cameraElement.videoHeight;
                context.drawImage(cameraElement, 0, 0, canvas.width, canvas.height);
                const imageDataUrl = canvas.toDataURL('image/png');

                previewImage.src = imageDataUrl;
                previewImage.style.display = 'block';
                currentImageUrl = imageDataUrl;
            }
        });

        // Event listener for submit button
        submitButton.addEventListener('click', function () {
            if (!currentImageUrl) {
                alert('Please upload or capture a document first');
                return;
            }

            // You can replace this with your form submission logic (e.g., uploading to a server)
            alert('Document submitted successfully!');

            // Optional: Clear the preview after submission
            previewImage.style.display = 'none';
        });