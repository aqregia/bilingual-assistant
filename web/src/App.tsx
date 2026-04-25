import { useMemo, useState } from 'react'
import './App.css'

const sampleText =
  '您好，关于今天法兰克福出港的冷链货物，请协助确认订舱状态、截单时间以及是否需要优先装载。'

const phraseBank = [
  {
    cn: '请协助确认订舱状态。',
    en: 'Please help confirm the booking status.',
  },
  {
    cn: '该票货物对航班稳定性要求较高。',
    en: 'This shipment is highly sensitive to flight stability.',
  },
  {
    cn: '请确认是否可以优先装载。',
    en: 'Please confirm whether priority loading can be arranged.',
  },
  {
    cn: '如有异常，请第一时间通知我们。',
    en: 'Please notify us immediately if there is any irregularity.',
  },
  {
    cn: '请提供最新的舱位和运价反馈。',
    en: 'Please provide the latest feedback on capacity and rate.',
  },
]

function createDemoTranslation(text: string) {
  if (!text.trim()) {
    return '请输入需要翻译或整理的航空货运沟通内容。'
  }

  return `Demo English Draft:

Hello,

Regarding the cold-chain shipment departing from Frankfurt today, could you please help confirm the booking status, document cut-off time, and whether priority loading is required?

If there is any irregularity, please kindly notify us as soon as possible.

Best regards,`
}

function App() {
  const [sourceText, setSourceText] = useState(sampleText)

  const demoTranslation = useMemo(() => {
    return createDemoTranslation(sourceText)
  }, [sourceText])

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Air Cargo Bilingual Assistant</p>
          <h1>航空货运双语助手</h1>
          <p className="hero-text">
            面向海外营业部、货代客户、航司内部沟通场景，辅助整理中文思路、生成英文表达，
            后续可接入语音识别、机器翻译和行业术语库。
          </p>
        </div>

        <div className="status-card">
          <span className="status-dot" />
          <div>
            <strong>当前阶段</strong>
            <p>前端 UI 骨架已启动，暂未接入真实翻译 API。</p>
          </div>
        </div>
      </section>

      <section className="workspace">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2>中文输入</h2>
              <p>输入待翻译、待润色或待整理的货运沟通内容。</p>
            </div>
            <button onClick={() => setSourceText(sampleText)}>填入示例</button>
          </div>

          <textarea
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
            placeholder="例如：请帮我把这段中文整理成适合发给海外货代客户的英文邮件……"
          />

          <div className="button-row">
            <button className="secondary" onClick={() => setSourceText('')}>
              清空
            </button>
            <button>生成英文参考</button>
          </div>
        </div>

        <div className="panel output-panel">
          <div className="panel-header">
            <div>
              <h2>英文参考输出</h2>
              <p>当前为演示输出，下一步接入真实翻译和润色能力。</p>
            </div>
          </div>

          <pre>{demoTranslation}</pre>
        </div>
      </section>

      <section className="phrase-section">
        <div className="section-title">
          <h2>航空货运常用表达</h2>
          <p>先沉淀高频表达，后续扩展为术语库和场景模板。</p>
        </div>

        <div className="phrase-grid">
          {phraseBank.map((item) => (
            <article className="phrase-card" key={item.cn}>
              <p className="cn">{item.cn}</p>
              <p className="en">{item.en}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
