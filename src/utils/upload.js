import axios from "axios";

const upload = async (file) => {
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", "fiverr");
  data.append("cloud_name", "dxfsta1qc");

  try {
    const res = axios.post(
      "https://api.cloudinary.com/v1_1/dxfsta1qc/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
