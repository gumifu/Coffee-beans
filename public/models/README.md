# 3Dモデルファイル

このフォルダに3Dモデルファイル（GLBまたはGLTF形式）を配置してください。

## 使用方法

1. コーヒー豆の3Dモデルファイル（`.glb`または`.gltf`）をこのフォルダに配置します
2. `.env.local`ファイルに以下の環境変数を追加します：
   ```
   NEXT_PUBLIC_MODEL_PATH=/models/your-model-file.glb
   ```
   または、`app/page.tsx`の`modelPath`変数を直接編集してください

## モデルがない場合

モデルファイルが指定されていない場合、自動的にSphere（球体）ベースのフォールバックが表示されます。

## 推奨モデル形式

- **GLB** (推奨) - バイナリ形式で、テクスチャとジオメトリが1つのファイルに含まれます
- **GLTF** - JSON形式で、テクスチャが別ファイルの場合があります

## 無料の3Dモデルリソース

- [Sketchfab](https://sketchfab.com/) - 無料のコーヒー豆モデルが多数あります
- [Poly Haven](https://polyhaven.com/models) - 高品質な無料モデル
- [TurboSquid](https://www.turbosquid.com/) - 無料・有料モデル

