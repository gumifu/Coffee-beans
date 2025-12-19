<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Velvet Bean Coffee

A beautiful coffee beans overview website built with Next.js, React Three Fiber, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ☕ Interactive 3D coffee bean animation
- 📱 Mobile-friendly navigation
- 🚀 Built with Next.js 15 (App Router)
- 🎭 Smooth scroll-triggered animations

## Run Locally

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## 3Dモデルの追加

実際の3Dモデル（GLB/GLTF形式）を使用する場合：

1. 3Dモデルファイルを `public/models/` フォルダに配置します
2. `.env.local` ファイルに以下を追加：
   ```
   NEXT_PUBLIC_MODEL_PATH=/models/your-model-file.glb
   ```
   または、`app/page.tsx` の `modelPath` 変数を直接編集してください

モデルが指定されていない場合、自動的にSphere（球体）ベースのフォールバックが表示されます。

詳細は `public/models/README.md` を参照してください。

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React Three Fiber** - 3D graphics library
- **@react-three/drei** - React Three Fiber utilities (GLTF loader含む)
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Icon library
