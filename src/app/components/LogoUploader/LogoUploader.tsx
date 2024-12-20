// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import styles from './LogoUploader.module.scss';

// export interface LogoUploaderProps
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
//   label?: string;
// }

// export default function LogoUploader({
//   label,
//   placeholder,
//   id,
//   ...rest
// }: LogoUploaderProps) {
//   return (
//     <div className="flex gap-10 mb-3">
//       {label && <p className="text-base color-gray-900">{label}</p>}
//       <label htmlFor={id} className={styles.label}>
//         <Image
//           className="mb-1"
//           width={48}
//           height={48}
//           src="/icons/upload.svg"
//           alt="upload"
//         />
//         {placeholder && (
//           <p className="text-base text-gray-500">{placeholder}</p>
//         )}
//         <input
//           {...rest}
//           id={id}
//           type="file"
//           accept="image/*"
//           className={styles.hidden}
//         />
//       </label>
//     </div>
//   );
// }
