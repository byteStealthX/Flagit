"use client"

import { useState } from "react";
import { ImageUploadField } from "@/components/ui/image-uploader";

const ImageUploaderDemo = () => {
    const [image, setImage] = useState()

    return (
        <ImageUploadField
            value={image}
            onChange={setImage}
            //  error
            className="w-48"
        />
    )
};
// form component
//  <FormField
//   control={form.control}
//   name="photo"
//   render={({ field }) => (
//   <FormItem>
//   <FormLabel>Profile Picture</FormLabel>
//   <FormControl>
//   <FormControl>
//   <ImageUploadField
//       {...field}
//       error={!!form.formState.errors.photo?.message}
//       className="w-48"
//       />
//   </FormControl>
//   </FormControl>
//   <FormMessage />
//   </FormItem>
//   )}
//   />
export { ImageUploaderDemo };
