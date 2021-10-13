function stringAnagram(dictionary, query) {
    // Write your code here

    let newDict = []
    
    dictionary.forEach((ele)=>{
       let newEle = ele.split('').sort().join('')
        newDict.push(newEle)
        
    })

    let result = []
    query.forEach((q)=>{
        let newQ = q.split('').sort().join('')
        let count = 0
        newDict.forEach((d) => {
            if(d === newQ){
                count +=1
            }
            
        })
        result.push(count)
        
    })
                                                     
    return result
}
/*
dict [
    'czecsjro', 'czecsojr', 'czecsorj', 'czecsrjo', 'czecsroj',
    'czejcors', 'czejcosr', 'czejcros', 'czejcrso', 'czejcsor',
    'czejcsro', 'czejocrs', 'czejocsr', 'czejorcs', 'czejorsc',
    'czejoscr', 'czejosrc', 'czejrcos', 'czejrcso', 'czejrocs',
    'czejrosc', 'czejrsco', 'czejrsoc', 'czejscor', 'czejscro',
    'czejsocr', 'czejsorc', 'czejsrco', 'czejsroc', 'czeocjrs',
    'czeocjsr', 'czeocrjs', 'czeocrsj', 'czeocsjr', 'czeocsrj',
    'czeojcrs', 'czeojcsr', 'czeojrcs', 'czeojrsc', 'czeojscr',
    'czeojsrc', 'czeorcjs', 'czeorcsj', 'czeorjcs', 'czeorjsc',
    'czeorscj', 'czeorsjc', 'czeoscjr', 'czeoscrj', 'czeosjcr',
    'czeosjrc', 'czeosrcj', 'czeosrjc', 'czercjos', 'czercjso',
    'czercojs', 'czercosj', 'czercsjo', 'czercsoj', 'czerjcos',
    'czerjcso', 'czerjocs', 'czerjosc', 'czerjsco', 'czerjsoc',
    'czerocjs', 'czerocsj', 'czerojcs', 'czerojsc', 'czeroscj',
    'czerosjc', 'czerscjo', 'czerscoj', 'czersjco', 'czersjoc',
    'czersocj', 'czersojc', 'czescjor', 'czescjro', 'czescojr',
    'czescorj', 'czescrjo', 'czescroj', 'czesjcor', 'czesjcro',
    'czesjocr', 'czesjorc', 'czesjrco', 'czesjroc', 'czesocjr',
    'czesocrj', 'czesojcr', 'czesojrc', 'czesorcj', 'czesorjc',
    'czesrcjo', 'czesrcoj', 'czesrjco', 'czesrjoc', 'czesrocj',
    ... 99900 more items
  ]
  query [
    'xqud',            'czecsojr', 'vow',             'czecsrjo',
    'epgjvyigqvokn',   'czejcors', 'eysusmfumukc',    'czejcros',
    'ojsmsqijzmbp',    'czejcsor', 'uvjof',           'czejocrs',
    'urydlgeuj',       'czejorcs', 'vo',              'czejoscr',
    'mywywjieh',       'czejrcos', 'rotmwkiatz',      'czejrocs',
    'cjl',             'czejrsco', 'mkxozx',          'czejscor',
    'fguygsoru',       'czejsocr', 'eerv',            'czejsrco',
    'tjriksgmn',       'czeocjrs', 'nfbtxlre',        'czeocrjs',
    'yhholfiuzozvww',  'czeocsjr', 'nn',              'czeojcrs',
    'boxbwlyiqyujq',   'czeojrcs', 'ar',              'czeojscr',
    'fhbisxhvftnqwa',  'czeorcjs', 'pkenjikq',        'czeorjcs',
    'wdmapktqgrpr',    'czeorscj', 'bef',             'czeoscjr',
    'fttpjeldblyltwi', 'czeosjcr', 'mbfcgzjztptq',    'czeosrcj',
    'sfubmykgsaqudb',  'czercjos', 'hcgcav',          'czercojs',
    'lpvsqrpkivmjblw', 'czercsjo', 'zdkxpxvkwmebo',   'czerjcos',
    'u',               'czerjocs', 'gxbaba',          'czerjsco',
    'eiyqlsd',         'czerocjs', 'waykqwkm',        'czerojcs',
    'rfia',            'czeroscj', 'eefhp',           'czerscjo',
    'qyrxgtyswjljdz',  'czersjco', 'nmcmwwlvejaiyi',  'czersocj',
    'rhblewnmk',       'czescjor', 'jwhf',            'czescojr',
    'sgwdqfeyqckwto',  'czescrjo', 'uq',              'czesjcor',
    'monn',            'czesjocr', 'drjvkrnrayqhbgo', 'czesjrco',
    'ikklxyilkvh',     'czesocjr', 'egj',             'czesojcr',
    'pcxzemm',         'czesorcj', 'vbomfcy',         'czesrcjo',
    'vx',              'czesrjco', 'fkkecx',          'czesrocj',
    ... 99900 more items
  ] */